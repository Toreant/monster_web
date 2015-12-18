import fs from 'fs';
import path from 'path';
import util from 'util';
import crypt from '../middleware/crypt';

class resumable {

    constructor() {
        this.temporaryFolder = '/public/upload/';
        this.maxFileSize = null;
        this.fileParameterName = 'file';
    }

    cleanIdentifier(identifier) {
        return identifier;
    }

    getChunkFilename(chunkNumber, identifier) {
        // Clean up the identifier
        identifier = this.cleanIdentifier(identifier);
        // What would the file name be?
        console.log(__dirname);
        return path.join(__dirname, '../public/upload/' + identifier + '.' + chunkNumber);
    }

    validateRequest(chunkNumber, chunkSize, totalSize, identifier, filename, fileSize) {
        // Clean up the identifier
        identifier = this.cleanIdentifier(identifier);

        // Check if the request is sane
        if (chunkNumber == 0 || chunkSize == 0 || totalSize == 0 || identifier.length == 0 || filename.length == 0) {
            return 'non_resumable_request';
        }
        var numberOfChunks = Math.max(Math.floor(totalSize / (chunkSize * 1.0)), 1);
        if (chunkNumber > numberOfChunks) {
            return 'invalid_resumable_request1';
        }

        // Is the file too big?
        //if($.maxFileSize && totalSize>$.maxFileSize) {
        //  return 'invalid_resumable_request2';
        //}

        if (typeof(fileSize) != 'undefined') {
            if (chunkNumber < numberOfChunks && fileSize != chunkSize) {
                // The chunk in the POST request isn't the correct size
                return 'invalid_resumable_request3';
            }
            if (numberOfChunks > 1 && chunkNumber == numberOfChunks && fileSize != ((totalSize % chunkSize) + chunkSize)) {
                // The chunks in the POST is the last one, and the fil is not the correct size
                return 'invalid_resumable_request4';
            }
            if (numberOfChunks == 1 && fileSize != totalSize) {
                // The file is only a single chunk, and the data size does not fit
                return 'invalid_resumable_request5';
            }
        }

        return 'valid';
    }

    //'found', filename, original_filename, identifier
    //'not_found', null, null, null
    get(req, callback) {
        var chunkNumber = req.param('resumableChunkNumber', 0);
        var chunkSize = req.param('resumableChunkSize', 0);
        var totalSize = req.param('resumableTotalSize', 0);
        var identifier = req.param('resumableIdentifier', "");
        var filename = req.param('resumableFilename', "");

        if (this.validateRequest(chunkNumber, chunkSize, totalSize, identifier, filename) == 'valid') {
            var chunkFilename = this.getChunkFilename(chunkNumber, identifier);
            fs.exists(chunkFilename, function (exists) {
                if (exists) {
                    callback('found', chunkFilename, filename, identifier);
                } else {
                    callback('not_found', null, null, null);
                }
            });
        } else {
            callback('not_found', null, null, null);
        }
    }

    //'partly_done', filename, original_filename, identifier
    //'done', filename, original_filename, identifier
    //'invalid_resumable_request', null, null, null
    //'non_resumable_request', null, null, null
    post(req, callback) {

        var fields = req.body;
        var files = req.files;
        var chunkNumber = fields['resumableChunkNumber'];
        var chunkSize = fields['resumableChunkSize'];
        var totalSize = fields['resumableTotalSize'];
        var identifier = this.cleanIdentifier(fields['resumableIdentifier']);
        var filename = fields['resumableFilename'];
        var targetName = new Date().getTime() + filename;
        var original_filename = fields['resumableIdentifier'];

        if (!files[this.fileParameterName] || !files[this.fileParameterName].size) {
            callback('invalid_resumable_request', null, null, null);
            return;
        }
        var validation = this.validateRequest(chunkNumber, chunkSize, totalSize, identifier, files[this.fileParameterName].size);
        if (validation == 'valid') {
            var chunkFilename = this.getChunkFilename(chunkNumber, identifier);

            // Save the chunk (TODO: OVERWRITE)
            fs.rename(files[this.fileParameterName].path, chunkFilename, () => {

                // Do we have all the chunks?
                var currentTestChunk = 1;
                var numberOfChunks = Math.max(Math.floor(totalSize / (chunkSize * 1.0)), 1);
                var testChunkExists =  () => {
                    fs.exists(this.getChunkFilename(currentTestChunk, identifier), function (exists) {
                        if (exists) {
                            currentTestChunk++;
                            if (currentTestChunk > numberOfChunks) {
                                callback('done', filename, original_filename, identifier);
                            } else {
                                // Recursion
                                testChunkExists();
                            }
                        } else {
                            callback('partly_done', filename, original_filename, identifier);
                        }
                    });
                };
                testChunkExists();
            });
        } else {
            callback(validation, filename, original_filename, identifier);
        }
    }


    // Pipe chunks directly in to an existsing WritableStream
    //   r.write(identifier, response);
    //   r.write(identifier, response, {end:false});
    //
    //   var stream = fs.createWriteStream(filename);
    //   r.write(identifier, stream);
    //   stream.on('data', function(data){...});
    //   stream.on('end', function(){...});
    write(identifier, writableStream, options) {
        options = options || {};
        options.end = (typeof options['end'] == 'undefined' ? true : options['end']);

        // Iterate over each chunk
        var pipeChunk = (number) => {

            var chunkFilename = this.getChunkFilename(number, identifier);
            fs.exists(chunkFilename, function (exists) {

                if (exists) {
                    // If the chunk with the current number exists,
                    // then create a ReadStream from the file
                    //
                    var sourceStream = fs.createReadStream(chunkFilename);
                    sourceStream.pipe(writableStream, {
                        end: false
                    });

                    sourceStream.on('end', function () {
                        // When the chunk is fully streamed,
                        // jump to the next one
                        pipeChunk(number + 1);
                    });
                } else {
                    // When all the chunks have been piped, end the stream
                    if (options.end) {
                        writableStream.end();
                    }
                    if (options.onDone) options.onDone();
                }
            });
        };
        pipeChunk(1);
    }

    clean(identifier,callback, options) {
        console.log(identifier);
        options = options || {};

        // Iterate over each chunk
        var pipeChunkRm =  (number) => {

            var chunkFilename = this.getChunkFilename(number, identifier);

            //console.log('removing pipeChunkRm ', number, 'chunkFilename', chunkFilename);
            fs.exists(chunkFilename, function (exists) {
                if (exists) {
                    console.log('exist removing ', chunkFilename);
                    fs.unlink(chunkFilename, function (err) {
                        if (err && options.onError) options.onError(err);
                    });

                    pipeChunkRm(number + 1);

                } else {
                    callback();
                    if (options.onDone) {
                        options.onDone();
                    }
                }
            });
        };
        pipeChunkRm(1);
    }

}

export default new resumable();
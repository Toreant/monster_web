/**
 * Created by apache on 15-11-22.
 */

class Uploader {

    /**
     * 上传
     * @param req
     * @param res
     * @param next
     */
    upload(req,res,next) {
        let result = {
            meta : '',
            code : 0,
            raw  : ''
        };

        if(req.file !== null) {
            result.meta = '上传成功';
            result.code = 200;
            result.raw = req.file.filename;
        } else {
            result.meta = '上传不成功';
            result.code = 500;
        }

        res.json(result);
    }
}

export default new Uploader();
/**
 * Created by apache on 15-11-22.
 */
import multiparty from 'multiparty';
import fs from 'fs';
import gm from 'gm';
import async from 'async';
import crypt from '../middleware/crypt';

class Uploader {

    /**
     * 上传图片
     * @param req
     * @param res
     * @param next
     */
    upload(req, res, next) {
        var form = new multiparty.Form(),
            fileName,
            width,height,x,y;

        async.waterfall([

            // 得到multiparty 数据
            function (_callback) {
                form.parse(req, function (err, field, file) {

                    // 目标
                    let target = file.file[0];

                    // 裁剪参数
                    let params = field.params[0];
                    params = JSON.parse(params);

                    // 对名字进行加密
                    fileName = (new Date().toString()) + target.originalFilename;
                    fileName = crypt.getMd5String(fileName);

                    var target_path = './public/img/upload/' + fileName,
                        tmp_path = target.path;

                    // 进行裁剪
                    gm(tmp_path).size(function(err, value) {

                        // 实际裁剪时的数据
                        width = value.width * parseInt(params.width) / parseInt(params.raw_width)  ;
                        height = value.height * parseInt(params.height) / parseInt(params.raw_height)  ;
                        x = value.width  * parseInt(params.X) / parseInt(params.raw_width) ;
                        y = value.height * parseInt(params.Y) / parseInt(params.raw_height)  ;

                        this.crop(
                            width, height, x, y
                        ).write(target_path, (err) => {
                                if (err) {
                                    console.log(err);
                                    res.json({meta: '上传文件失败', code: 500});
                                } else {
                                    _callback(null, tmp_path, fileName);
                                }
                            });
                    })
                });
            },

            // 删除临时文件
            function (tmp_path, fileName, _callback) {
                fs.unlink(tmp_path, (err) => {
                    if (err) {
                        console.log(err);
                    } else {
                        _callback(null, fileName);
                    }
                });
            }

        ], (err, fileName) => {

            let result = {
                meta: '',
                code: 0,
                raw: fileName
            };

            if (req.file !== null) {
                result.meta = '上传成功';
                result.code = 200;
                result.raw = fileName;
            } else {
                result.meta = '上传不成功';
                result.code = 500;
            }

            res.json(result);
        });
    }


    /**
     * 上传音乐
     * @param req
     * @param res
     * @param next
     */
    uploadMusic(req,res,next) {
        var form = new multiparty.Form();
        let result = {
            meta : '',
            code : 0,
            raw  : ''
        };
        form.parse(req,function(err,field,file) {
            if(err) {
                result.code = 500;
                result.meta = '上传音乐失败';
                res.json(result);
            } else {
                let target = file.file[0],
                    tmp_path = target.path,
                    target_path = __dirpath+'/public/music/',
                    filename = target.originalFilename;
                filename = crypt.getMd5String((new Date().toString())+filename);
                target_path = target_path+filename;

                fs.link(tmp_path,target_path,(err) => {
                    if(err) {
                        result.code = 500;
                        result.meta = '保存文件失败';
                        res.json(result);
                    }
                });

                fs.unlink(tmp_path,(err) => {
                    if(err) {
                        console.log(err);
                    } else {
                        result.code = 200;
                        result.meta = '上传文件成功';
                        result.raw = filename;
                        res.json(result);
                    }
                });
            }
        });
    }
}

export default new Uploader();
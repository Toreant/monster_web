/**
 * Created by apache on 15-11-25.
 */
import crypto from 'crypto';

class crypt {

    // md5加密
    getMd5String(str) {
        var md5sum = crypto.createHash('md5');
        md5sum.update(str);
        return md5sum.digest('hex');
    }

    //
}

export default new crypt();
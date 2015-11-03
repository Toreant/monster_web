/**
 * Created by apache on 15-11-2.
 */
import async from 'async';
import Article from '../models/article';

class md {
    /**
     * 通过id号查找文章
     * @param id
     * @param callback
     */
    getArticleById(id,callback) {
        Article.findById(id,(err,docs) => {
            callback(docs);
        });
    }

    /**
     * 通过一组_id查找文章数组
     * @param ids
     * @param callback
     */
    getArticleByIds(ids,callback) {
        Article.find({_id : {$in : ids}},(err,docs) => {
            callback(docs);
        });
    }

    /**
     * 保存文章
     * @param params
     * @param callback
     */
    saveArticle(params,callback) {
        let article = new Article(params);
        article.save((err, product, numAffected) => {
            if (err) {
                return callback(err);
            } else {
                return callback(numAffected,product);
            }
        });
    }

    /**
     * 更新文章
     * @param where
     * @param params
     * @param callback
     */
    updateArticle(where,params,callback) {

    }
}
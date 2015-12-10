/**
 * Created by apache on 15-10-24.
 */
import alt from '../alt';

class HomeActions {
    constructor() {
        this.generateActions(
            'getArticlesSuccess',
            'getMusicsSuccess'
        );
    }

    getArticles() {
        let params = {
            params : {},
            option : {
                skip : 0,
                limit : 10,
                sort : {create_time : -1}
            }
        };
        $.ajax({
            url : '/api/articles',
            type : 'post',
            contentType : 'application/json;charset=utf-8',
            dataType : 'json',
            cache : false,
            data : JSON.stringify(params)
        }).done((data) => {
            this.actions.getArticlesSuccess(data);
        }).fail(() => {
           toastr.warning('获取数据失败');
        });
    }

    getMusics() {
        let params = {
            option : {
                skip : 0,
                limit : 10,
                sort : {
                    create_time : -1
                }
            }
        };
        $.ajax({
            url : '/api/musics',
            type : 'post',
            contentType : 'application/json;charset=utf-8',
            cache : false,
            data  : JSON.stringify(params),
            dataType : 'json'
        }).done((data) => {
            this.actions.getMusicsSuccess(data);
        }).fail(() => {
           toastr.warning('获取数据失败');
        });
    }
}

export default alt.createActions(HomeActions);
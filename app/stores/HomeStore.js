/**
 * Created by apache on 15-10-24.
 */
import alt from '../alt';
import HomeActions from '../actions/HomeActions';

class HomeStore {
    constructor() {
        this.bindActions(HomeActions);
        this.articles = [];
        this.musics = [];
        this.a_loading = true;
        this.m_loading = true;
    }

    //HomeActions 中的方法

    onGetArticlesSuccess(data) {
        if(data.code === 200) {
            this.articles = data.raw._raw;
            this.a_loading = false;
        } else if(data.code === 500) {
            toastr.warning('获取数据失败');
        }
    }

    onGetMusicsSuccess(data) {
        if(data.code === 200) {
            this.musics = data.raw._raw;
            this.m_loading = false;
        } else if(data.code === 500) {
            toastr.warning('获取数据失败');
        }
    }
}

export default alt.createStore(HomeStore);
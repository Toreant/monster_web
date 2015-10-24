/**
 * Created by apache on 15-10-24.
 */
import alt from '../alt';
import HomeActions from '../actions/HomeActions';

class HomeStore {
    constructor() {
        this.bindActions(HomeActions);
    }

    //HomeActions 中的方法

    onGetPage() {
        $.post(
            '/api/app',
            {},
            function(data){
                console.log(data);
            }
        );
    }
}

export default alt.createStore(HomeStore);
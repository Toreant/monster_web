/**
 * Created by apache on 15-10-24.
 */
import alt from '../alt';

class HomeActions {
    constructor() {
        this.generateActions(
            'getPage'
        );
    }

    getData() {
        $.post(
            '/api/app/1',
            {
            },
            function(data){
                console.log(data);
            }
        );
    }
}

export default alt.createActions(HomeActions);
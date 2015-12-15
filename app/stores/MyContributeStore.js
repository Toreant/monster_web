/**
 * Created by apache on 15-12-15.
 */
import alt from '../alt';
import MyContributeActions from '../actions/MyContributeActions';

class MyContributeStore {
    constructor() {
        this.bindActions(MyContributeActions);
        this.loading = true;
        this.error = false;
        this.list = [];
    }

    onGetContributeSuccess(data) {
        console.log(data);
        this.loading = false;
        if(data.code === 200) {
            this.list = data.raw._raw;
        } else if(data.code === 500) {
            this.error = true;
        } else {

        }
    }

    onGetContributeFail() {
        this.loading = false;
        this.error = true;
    }

    onDeleteSuccess(raw) {

        let data = raw.data,
            target = raw.target;

        if(data.code === 200) {
            toastr.success('删除成功');
            $(target).fadeOut(function() {
                $(this).remove();
            });
        } else {
            toastr.warning(data.meta);
        }
    }
}

export default alt.createStore(MyContributeStore);
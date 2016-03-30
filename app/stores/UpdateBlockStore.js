/**
 * Created by apache on 15-12-15.
 */
import alt from '../alt';
import UpdateBlockActions from '../actions/UpdateBlockActions';

class UpdateBlockStore {
    constructor() {
        this.bindActions(UpdateBlockActions);
        this.title = '';
        this.summary = '';
        this.tag = [];
        this.tags = '';
        this.content = '';
    }

    onChangeTitle(event) {

        this.title = event.target.value;
    }

    onChangeSummary(event) {
        this.summary = event.target.value;
    }

    onChangeTags(event) {

        let tags = event.target.value.replace(/\s+/g,",");
        tags = tags.split(',');
        this.tag = [];
        tags.map((data) => {
            this.tag.push(data);
        });
    }

    onChangeContent(event) {
        this.content = event.target.value;
    }

    onUpdateSuccess(data) {
        if(data.code === 200) {
            toastr.success(data.meta);
        } else if(data.code === 500) {
            toastr.warning(data.meta);
        }
    }
}

export default alt.createStore(UpdateBlockStore);
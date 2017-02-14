/**
 * Created by apache on 15-12-15.
 */
import alt from '../alt';
import MyContributeActions from '../actions/MyContributeActions';
import md from 'markdown';

class MyContributeStore {
    constructor() {
        this.bindActions(MyContributeActions);
        this.loading = true;
        this.error = false;
        this.list = [];
    }

    onGetContributeSuccess(data) {
        this.loading = false;
        if(data.code === 200) {
            this.list = data.raw._raw;
        } else if(data.code === 500) {
            this.error = true;
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

    onGetSuccess(data) {

        if(data.code === 200) {
            let target = data.raw.article;
            let $updateModal = $("#updateModal");
            $updateModal.on('show.bs.modal',function(event) {
                var modal = $(this),
                    tags = target.tags.toString().replace(/,/g,' ');
                modal.find("input[name='title']").val(target.title);
                modal.find("textarea[name='summary']").val(target.summary);
                modal.find("input[name='tag']").val(tags);
                modal.find("textarea[name='content']").val(target.content);
                modal.find("input[name='_id']").val(target._id);

                let markdown = md.markdown;
                $("#updateContent").markdown({
                    autofocus:false,
                    savable:false,
                    onPreview: function(e) {
                        var previewContent;

                        if (e.isDirty()) {
                            var originalContent = e.getContent();

                            previewContent = markdown.toHTML(originalContent);
                        } else {
                            previewContent = "写下你的大作吧！！！"
                        }
                        return previewContent;
                    }
                });
            });
            $updateModal.modal('show');
        } else {
            toastr.warning('获取数据失败');
        }
    }

    onGetFail() {
        toastr.warning('获取数据失败');
    }
}

export default alt.createStore(MyContributeStore);
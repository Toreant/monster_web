/**
 * Created by apache on 15-11-14.
 */
import React from 'react';
import {Link} from 'react-router';
import ConListActions from '../actions/ConListActions';
import ConListStore from '../stores/ConListStore';

class ConList extends React.Component {

    constructor(props) {
        super(props);
        this.state = ConListStore.getState();
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        ConListStore.listen(this.onChange);
        let props = this.props;
        ConListActions.getConList(props.option,props.tab,props.domain);
    }

    componentWillUnMount() {
        ConListStore.unlisten(this.onChange);
    }

    onChange(state) {
        this.setState(state);
    }

    prevPage() {
        console.log('hgeh');
        let props = this.props;
        ConListActions.getConList(props.option,props.tab,props.domain,this.state.skip-1);
        ConListActions.changeSkip(0);
    }

    nextPage() {
        let props = this.props;
        ConListActions.getConList(props.option,props.tab,props.domain,this.state.skip+1);
        ConListActions.changeSkip(1);
    }

    render() {
        let option;
        if(this.props.tab === 'articles') {
            option = 'article';
        }
        let List,SkipPage,
            disabled = '',disabledN = '';
        if(this.state.skip === 0) {
            disabled = 'disabled';
        }
        if(this.state.skip >= (this.state.count/4-1) || this.state.count < 4) {
            disabledN = 'disabled';
        }
        if(this.state.contributes.length > 0) {
            List = this.state.contributes.map((data,index) => {
                return (
                    <div className="media mon-conlist-item" key={data.data._id}>
                        <div className="media-left">
                            <Link to={'/'+option+'/'+data.data._id}>
                                <img src={data.data.abbreviations || '/img/abbreviations.png'} alt="loading" width='80'/>
                            </Link>
                        </div>
                        <div className="media-body">
                            <Link to={'/'+option+'/'+data.data._id} className='text-primary mon-conlist-title'>
                                {data.data.title}
                            </Link>
                            <p　className='text-muted mon-conlist-info'>
                                <span>投稿日期：{new Date(data.data.create_time).toLocaleDateString()}</span>
                                <span>浏览次数：{data.data.browser_count}</span>
                            </p>
                            <p className='text-muted'>
                                {data.data.summary}
                            </p>
                        </div>
                        <span className='mon-conlist-index'>{index+1}</span>
                    </div>
                );
            });

            SkipPage = (
                <div className='mon-skip'>
                    <a href="javascript:;" className={'btn mon-page mon-prev-page '+disabled} onClick={this.prevPage.bind(this)}>
                        <span className='fa fa-arrow-left'></span>
                    </a>
                    <a href="javascript:;" className={'btn mon-page mon-next-page '+disabledN} onClick={this.nextPage.bind(this)}>
                        <span className='fa fa-arrow-right'></span>
                    </a>
                </div>
            );
        } else {
            List = (
                <p className="bg-info mon-padding">
                    尚没有任何投稿
                </p>
            );

            SkipPage = null;
        }

        return (
            <div className='animated flipInX'>
                {List}
                {SkipPage}
            </div>
        );
    }
}

export default ConList;
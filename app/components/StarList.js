/**
 * Created by apache on 15-10-30.
 */
import React from 'react';
import {Link} from 'react-router';
import StarListActions from '../actions/StarListActions';
import StarListStore from '../stores/StarListStore';

class StarList extends React.Component {
    constructor(props) {
        super(props);
        this.state = StarListStore.getState();
        this.onChange =  this.onChange.bind(this);
    }

    componentDidMount() {
        StarListStore.listen(this.onChange);

        // profile
        if(this.props.params.domain === undefined) {
            StarListActions.getStarList(0,null);
        } else {
            StarListActions.getStarList(1,this.props.params.domain);
        }
    }

    componentWillUnmount() {
        StarListStore.unlisten(this.onChange);
    }

    onChange(state) {
        this.setState(state);
    }

    prevPage() {
        //let props = this.props;
        StarListActions.getStarList(0,null,null,this.state.skip-1);
        StarListActions.changeSkip(0);
    }

    nextPage() {
        //let props = this.props;
        StarListActions.getStarList(0,null,null,this.state.skip+1);
        StarListActions.changeSkip(1);
    }

    render() {

        let List, SkipPage,
            disabled = '',disabledN = '';
        if(this.state.skip === 0) {
            disabled = 'disabled';
        }
        if(this.state.skip >= (this.state.count/10-1) || this.state.count < 10) {
            disabledN = 'disabled';
        }
        if(this.state.starList.length === 0) {
            List = (
                <p className="bg-info">
                    还没有收藏任何东西
                </p>
            );
            SkipPage = null;
        } else {
            List = this.state.starList.map((data) => {
                return (
                    <div className='media mon-conlist-item' key={data._id}>
                        <div className="media-left">
                            <Link to={'/article/'+data._id}>
                                <img src={data.abbreviations || '/img/abbreviations.png'} alt="loading" width='80'/>
                            </Link>
                        </div>
                        <div className="media-body">

                            <Link className='text-primary' to={'/article/'+data._id}>
                                {data.title}
                            </Link>
                            <div className='mon-conlist-info'>
                            <span className="fa fa-clock-o">
                                {new Date(data.create_time).toLocaleDateString()}
                            </span>
                            </div>
                            <p className='text-muted'>
                                简介：{data.summary || '什么鬼也没有'}
                            </p>
                        </div>
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
        }
        return (
            <div className='col-md-9 col-sm-9 animated fadeInUp mon-padding'>
                <p className='bg-info mon-bg-title mon-padding'>
                    收藏列表
                </p>
                {List}
                {SkipPage}
            </div>
        );
    }
}

export default StarList;

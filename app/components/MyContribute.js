/**
 * Created by apache on 15-12-15.
 */
import React from 'react';
import MyContributeActions from '../actions/MyContributeActions';
import MyContributeStore from '../stores/MyContributeStore';
import {Link} from 'react-router';
import Loading from './Loading';

class MyContribute extends React.Component {
    constructor(props) {
        super(props);
        this.state = MyContributeStore.getState();
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        MyContributeStore.listen(this.onChange);
        MyContributeActions.getContribute(this.props.params.column,0);
    }

    componentDidUpdate(prevProps) {
        if(prevProps.params.column !== this.props.params.column) {
            MyContributeActions.getContribute(this.props.params.column,0);
        }
    }

    componentWillUnmount() {
        MyContributeStore.unlisten(this.onChange);
    }

    onChange(state) {
        this.setState(state);
    }

    delete(column,_id,target) {
        MyContributeActions.delete(column,_id,'#'+target);
    }

    update(column,_id) {
        MyContributeActions.get(column,_id);
    }

    render() {
        let List;
        if(this.state.loading) {
            List = <Loading />;
        } else if(this.state.list.length !== 0) {
            List = this.state.list.map((data,index) => {
                let option = 'article';
                switch(this.props.params.column) {
                    case 'articles' :
                        option = 'article';
                        break;
                    case 'musics' :
                        option = 'music';
                        break;
                    case 'animtes' :
                        option = 'animate';
                        break;
                }
                return (
                    <div id={"myContribute_"+data.data._id} className="media mon-conlist-item" key={'contribute:'+data.data._id}>
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
                            <div className="mon-fixed-btn">
                                <button className="btn btn-danger" onClick={this.delete.bind(this,option,data.data._id,"myContribute_"+data.data._id)}>
                                    删除
                                </button>
                                <button className="btn btn-primary" onClick={this.update.bind(this,option,data.data._id)}>
                                    更改
                                </button>
                            </div>
                        </div>
                        <span className='mon-conlist-index'>{index+1}</span>
                    </div>
                );
            });
        } else if(this.state.error) {
            List = (
                <div>
                    <a href="javascript:;">
                        <span className="fa fa-circle"></span>
                        刷新
                    </a>
                </div>
            );
        }



        return (
            <div className='animated flipInX mon-contribute'>
                {List}
            </div>
        );
    }
}

export default MyContribute;
/**
 * Created by apache on 15-11-10.
 */
import React from 'react';
import {Link} from 'react-router';
import {isEqual} from 'underscore';
import ListActions from '../actions/ListActions';
import ListStore　from '../stores/ListStore';

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = ListStore.getState();
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        ListStore.listen(this.onChange);
        ListActions.getList(this.props.params.column,this.props.params.skip);
    }

    componentWillUnmount() {
        console.log('hehe');
        $("#lists").removeClass('fadeInUp');
        ListStore.unlisten(this.onChange);
    }

    componentDidUpdate(prevProp) {
        if(!isEqual(prevProp.params,this.props.params)) {
            ListActions.getList(this.props.params.column,this.props.params.skip);
        }
    }

    onChange(state) {
        this.setState(state);
    }

    render() {
        let Offset,
            column;
        switch(this.props.params.column) {
            case 'articles' :
                column = '/article/';
                break;
            case 'musics' :
                column = '/music/';
                break;
            case 'animates' :
                column = '/animate/';
                break;
        }
        switch(this.props.params.column) {
            case 'animates' :
                Offset = (
                    <div>
                        <span className='text-info mon-bg-title'>
                            动漫区
                        </span>
                    </div>
                );
                break;
            case 'articles' :
                Offset = (
                    <div>
                        <span className='text-info mon-bg-title'>
                            文章区
                        </span>
                        <p className='bg-success mon-column-info'>
                            吐槽，欣赏美文，黄黄的。。。。
                        </p>
                    </div>
                );
                break;
            case 'musics' :
                Offset = (
                    <div>
                        <span className='text-info mon-bg-title'>
                            音乐区
                        </span>
                        <p></p>
                    </div>
                );
                break;
        }
        let List = this.state.list.map((data) => {
            return (
                <li key={data.data._id} className="animated fadeInUp">
                    <Link  to={column+data.data._id} className='mon-top'>
                        <div className='mon-overlay'>
                            <img className='img-response' src={data.data.abbreviations || '/img/abbreviations.png'} alt="loading"/>
                        </div>
                        <div className='mon-title'>
                            <div>
                                <img src={data.user.avatar_url} alt="loading"/>
                                <span>{data.user.username}</span>
                                <span className='pull-right'>{new Date(data.data.create_time).toLocaleDateString()}</span>
                            </div>
                            <h2>{data.data.title}</h2>
                        </div>
                    </Link>
                </li>
            );
        });
        let skip = this.props.params.skip===undefined?1:parseInt(this.props.params.skip),
            disabled = '',
            disabledN = '';
        if(skip === 1) {
            disabled = 'disabled';
        } else if(skip >= (this.state.count/6)) {
            disabledN = 'disabled';
        }
        let Page = (
            <div className='row mon-skip'>
                <Link to={'/'+this.props.params.column+'/'+(skip-1)} className={'btn mon-page mon-prev-page '+disabled}>
                    <span className='fa fa-arrow-left'></span>
                </Link>
                <Link to={'/'+this.props.params.column+'/'+(skip+1)} className={'btn mon-page mon-next-page '+disabledN}>
                    <span className='fa fa-arrow-right'></span>
                </Link>
            </div>
        );
        return (
            <div id="lists" className='container mon-main'>
                <div className='row'>
                    <div className='col-md-8 col-md-offset-2 col-xs-12'>
                        <ul className='nav'>
                            {List}
                        </ul>
                    </div>
                    <div className='col-md-2'>
                        {Offset}
                    </div>
                </div>
                {Page}
            </div>
        );
    }
}

List.contextTypes = {
    router: React.PropTypes.func.isRequired
};

export default List;

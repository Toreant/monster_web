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
        if(this.props.what === undefined) {
            StarListActions.getStarList(0,null);
        } else {
            StarListActions.getStarList(1,this.props.domain,this.props.option);
        }
    }

    componentWillUnMount() {
        StarListStore.unlisten(this.onChange);
    }

    onChange(state) {
        this.setState(state);
    }

    render() {
        let List = this.state.starList.map((data) => {
            return (
                <div className='media'>
                    <div className="media-left">
                        <Link to={'/article/'+data._id}>
                            <img src={data.abbreviations || '/img/abbreviations.png'} alt="loading" width='80'/>
                        </Link>
                    </div>
                    <div className="media-body">
                        <p className='text-primary'>
                            {data.title}
                        </p>
                        <span>
                            <span className="fa fa-time"></span>
                            {new Date(data.create_time).toLocaleDateString()}
                        </span>
                        <p className='text-muted'>
                            {data.summary}
                        </p>
                    </div>
                </div>
            );
        });
        return (
            <div className='col-md-9 col-sm-9 animated fadeInUp mon-padding'>
                <p className='bg-info mon-bg-title'>
                    收藏列表
                </p>
                {List}
            </div>
        );
    }
}

export default StarList;

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

    componentWillUnMount() {
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
        console.log(this.state.list);
        let List = this.state.list.map((data) => {
            return (
                <li key={data.article._id}>
                    <Link  to={'/article/'+data.article._id} className='mon-top'>
                        <div className='mon-overlay'>
                            <img src={data.article.abbreviations || '/img/abbreviations.png'} alt="loading"/>
                        </div>
                        <div className='mon-title'>
                            <div>
                                <h2>{data.article.title}</h2>
                            </div>
                        </div>
                    </Link>
                </li>

            );
        });
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-md-8 col-md-offset-2'>
                        <ul className='nav'>
                            {List}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

List.contextTypes = {
    router: React.PropTypes.func.isRequired
};

export default List;

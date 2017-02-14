/**
 * Created by apache on 16-4-6.
 */
import React from 'react';
import {Link} from 'react-router';

class CommonList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let column = this.props.column;
        let List = this.props.list.map((data) => {
            let abbreviations = data.data.abbreviations || '/img/abbreviations.png';
            return (
                <li key={data.data._id} className="animated fadeInUp">
                    <Link  to={column+data.data._id} className='mon-top'>
                        <div className='mon-overlay' style={{backgroundImage: 'url('+abbreviations+')'}}>
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

        return (
            <ul className="nav">
                {List}
            </ul>
        );
    }
}

export default CommonList;
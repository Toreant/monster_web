/**
 * Created by apache on 15-10-27.
 */
import React from 'react';

class NotFound extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='container'>
                <div className="mon-table">
                    <div>
                        {this.props.state}
                    </div>
                </div>
            </div>
        );
    }
}

export default NotFound;
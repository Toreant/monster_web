/**
 * Created by apache on 15-11-29.
 */
import React from 'react';

class Loading extends React.Component {
    render() {
        return (
            <div className='loader-inner line-scale-pulse-out mon-loader-o mon-loader-bg'>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        );
    }
}

export default Loading;
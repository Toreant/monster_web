/**
 * Created by apache on 15-12-1.
 */
import React from 'react';
import {RouteHandler} from "react-router";

class MemberCenter extends React.Component {
    render() {
        return (
            <div className="container mon-main">
                <RouteHandler />
            </div>
        );
    }
}

export default MemberCenter;
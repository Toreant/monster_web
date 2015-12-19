/**
 * Created by apache on 15-11-14.
 */
import React from 'react';
import ConList from './ConList';

class ConArticle extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let Result;
        if(this.props.params.domain !== undefined) {
            Result = (
                <ConList tab={this.props.params.column || 'article'} domain={this.props.params.domain} />
            );
        }

        return (
            <div>
                {Result}
            </div>
        );
    }
}

export default ConArticle;
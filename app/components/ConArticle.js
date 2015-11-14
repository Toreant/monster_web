/**
 * Created by apache on 15-11-14.
 */
import React from 'react';
import ConList from './ConList';

class ConArticle extends React.Component {
    render() {
        return (
            <div>
                <ConList option='0' tab='articles' type='' domain={this.props.params.domain} />
            </div>
        );
    }
}

export default ConArticle;
/**
 * Created by apache on 15-11-14.
 */
import React from 'react';
import ConList from './ConList';

class ConArticle extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log(this.props.params);
    }

    render() {
        let Result;
        if(this.props.params.domain !== undefined) {
            Result = (
                <ConList option='0' tab='articles' type='' domain={this.props.params.domain} />
            );
        } else {
            Result = (
                <ConList option='1' tab='articles' />
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
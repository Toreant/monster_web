/**
 * Created by apache on 15-11-8.
 */
import React from 'react';

class BtnBlock extends React.Component {

    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    onChange(state) {
        this.setState(state);
    }

    handlerClick() {
        $("html,body").animate({scrollTop:0},700);
    }

    render() {
        return (
            <div className='mon-btn-block'>
                <a href="javascript:;" className='btn btn-default' onClick={this.handlerClick.bind(this)}>
                    <span className='fa fa-arrow-up'></span>
                </a>
            </div>
        );
    }
}

export default BtnBlock;
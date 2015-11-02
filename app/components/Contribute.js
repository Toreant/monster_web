/**
 * Created by apache on 15-11-2.
 */
import React from 'react';
import ContributeActions from '../actions/ContributeActions';
import ContributeStore from '../stores/ContributeStore';
class Contribute extends React.Component {
    constructor(props) {
        super(props);
        this.state = ContributeStore.getState();
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        ContributeStore.listen(this.onChange);
    }

    componentWillUnMount() {
        ContributeStore.unlisten(this.onChange);
    }

    onChange(state) {
        this.setState(state);
    }

    render() {
        let Contributes;
        if(this.state.contributes.length === 0) {
            Contributes = (
                <p className='bg-danger mon-padding'>我还没有分享任何东西</p>
            );
        } else {
            Contributes = this.state.contributes.map((data,index) => {

            });
        }
        return(
            <div className='col-sm-9 col-md-9 animated fadeInUp'>
                <p className='bg-success mon-padding mon-bg-title'>我的贡献分享</p>
                {Contributes}
            </div>
        );
    }
}
export default Contribute;
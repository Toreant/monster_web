/**
 * Created by apache on 15-10-23.
 */
import React from 'react';

class Footer extends React.Component {

    show(type) {
        switch(type) {
            case 'weixin':
                break;
        }
    }

    render() {
        return (
            <footer className='mon-footer'>
                <p className="text-center">copyright@toreant.top</p>
            </footer>
        );
    }
}

export default Footer;
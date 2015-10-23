/**
 * Created by apache on 15-10-23.
 */
import React from 'react';
import {RouteHandler} from 'react-router';
import Nav from './Nav';
import Footer from './Footer';

class App extends React.Component {
    render() {
        return (
            <div>
                <Nav />
                <RouteHandler />
                <Footer/>
            </div>
        );
    }
}

export default App;
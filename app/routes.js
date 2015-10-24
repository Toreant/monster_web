/**
 * Created by apache on 15-10-23.
 */
import React from 'react';
import {Route} from 'react-router';
import App from './components/App';
import Home from './components/Home';
import Login from './components/Login'

export default (
    <Route handler={App}>
        <Route path='/' handler={Home} />
        <Route path='/login' handler={Login} />
    </Route>
);
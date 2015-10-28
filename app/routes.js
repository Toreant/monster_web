/**
 * Created by apache on 15-10-23.
 */
import React from 'react';
import {Route} from 'react-router';
import App from './components/App';
import Home from './components/Home';
import Login from './components/Login';
import User from './components/User';
import NotFound from './components/NotFound';

export default (
    <Route handler={App}>
        <Route path='/' handler={Home} />
        <Route path='/login' handler={Login} />
        <Route path='u' handler={User}>
            <Route path=':domain'>
                <Route path='setting' handler={NotFound} />
                <Route path='follower' handler={User} />
                <Route path='following' handler={User} />
                <Route path='contribute' handler={User} />
            </Route>
        </Route>
        <Route path='*' handler={NotFound} />
    </Route>
);
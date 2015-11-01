/**
 * Created by apache on 15-10-23.
 */
import React from 'react';
import {Route} from 'react-router';
import App from './components/App';
import Home from './components/Home';
import Login from './components/Login';
import User from './components/User';
import Set from './components/Set';
import Notice from './components/Notice';
import Star from './components/Star';
import NotFound from './components/NotFound';
import PostAnimate from './components/PostAnimate';
import ProfileCenter from './components/ProfileCenter';

export default (
    <Route handler={App}>
        <Route path='/' handler={Home} />
        <Route path='/login' handler={Login} />
        <Route path='profile' handler={User}>
            <Route path='setting' handler={Set} />
            <Route path='center' handler={ProfileCenter} />
            <Route path='follower' handler={User} />
            <Route path='following' handler={User} />
            <Route path='contribute' handler={User} />
            <Route path='notice' handler={Notice} />
            <Route path='star' handler={Star} />
            <Route path='/post'>
                <Route path='animate' handler={PostAnimate}/>
                <Route path='music' />
                <Route path='article' />
            </Route>
        </Route>
        <Route path=':username' handler={Followers} />
        <Route path='*' handler={NotFound} />
    </Route>
);
/**
 * Created by apache on 15-10-23.
 */
import React from 'react';
import {Route,DefaultRoute} from 'react-router';
import App from './components/App';
import Home from './components/Home';
import Login from './components/Login';
import User from './components/User';
import Set from './components/Set';
import Notice from './components/Notice';
import StarList from './components/StarList';
import NotFound from './components/NotFound';
import PostAnimate from './components/PostAnimate';
import ProfileCenter from './components/ProfileCenter';
import Followers from './components/Followers';
import Following from './components/Following';
import Contribute from './components/Contribute';
import PostArticle from './components/PostArticle';
import Article from './components/Article';
import List from './components/List';
import Member from './components/Member';
import ConArticle from './components/ConArticle';

export default (
    <Route handler={App}>
        <Route path='/' handler={Home} />
        <Route path='/login' handler={Login} />

        <Route path='/article'>
            <Route path=':id' handler={Article} />
        </Route>

        <Route path='/member' handler={Member}>
            <Route path=':domain' hanlder={Contribute}>
                <Route path='article' handler={ConArticle} />
                <Route path='music' handler={NotFound} />
                <Route path='animate' handler={NotFound} />
            </Route>
        </Route>

        <Route path='/member'>
            <Route path=':domain'>
                <Route path='following' handler={Notice}/>
                <Route Path='followers' handler={Notice}/>
                <Route path='star' handler={StarList} />
            </Route>
        </Route>

        <Route path='profile' handler={User}>
            <DefaultRoute handler={ProfileCenter}/>
            <Route path='setting' handler={Set} />
            <Route path='center' handler={ProfileCenter} />
            <Route path='followers' handler={Followers}>
                <Route path=':page' handler={Followers}/>
            </Route>
            <Route path='following' handler={Following}>
                <Route path=':page' handler={Following}/>
            </Route>
            <Route path='contribute' handler={Contribute}>
                <DefaultRoute handler={ConArticle} />
                <Route path='/profile/article'handler={ConArticle} />
                <Route path='/profile/music' handler={ConArticle} />
                <Route path='/profile/animate' handler={ConArticle} />
            </Route>
            <Route path='notice' handler={Notice} />
            <Route path='star' handler={StarList} />
            <Route path='/post'>
                <Route path='animate' handler={PostAnimate}/>
                <Route path='music' />
                <Route path='article' handler={PostArticle}/>
            </Route>
        </Route>

        <Route path=':column' handler={List}>
            <Route path=':skip' handler={List} />
        </Route>
        <Route path='*' handler={NotFound} />
    </Route>
);
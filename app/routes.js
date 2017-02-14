/**
 * Created by apache on 15-10-23.
 */
import React from 'react';
import {Router,Route,DefaultRoute} from 'react-router';
import App from './components/App';
import Home from './components/Home';
import Login from './components/Login';
import User from './components/User';
import Set from './components/Set';
import Notice from './components/Notice';
import StarList from './components/StarList';
import NotFound from './components/NotFound';
// 投稿
//import PostAnimate from './components/PostAnimate';
//import PostMusic from './components/PostMusic';
import PostArticle from './components/PostArticle';

import MyContribute from './components/MyContribute';

import ProfileCenter from './components/ProfileCenter';
//import Followers from './components/Followers';
//import Following from './components/Following';
import Follow from './components/Follow';
import Contribute from './components/Contribute';
import Article from './components/Article';
import List from './components/List';
import Member from './components/Member';
import ConArticle from './components/ConArticle';
//import Music from './components/Music';
import MemberCenter from './components/MemberCenter';
import MemberFollow from './components/MemberFollow';
import TagList from './components/TagList';
//import Animate from './components/Animate';
export default(
    <Route handler={App}>
        <Route path='/' handler={Home} />
        <Route path='/login' handler={Login} />

        <Route path='/article'>
            <Route path=':id' handler={Article} />
        </Route>

        <Route path='/member' handler={Member}>
            <Route path=':domain' hanlder={Contribute}>
                <DefaultRoute handler={ConArticle} />
                <Route path="contributes">
                    <Route path=":column" handler={ConArticle} />
                </Route>
            </Route>
        </Route>

        <Route path='/member'>
            <Route path=':domain' handler={MemberCenter}>
                <DefaultRoute handler={StarList} />
                <Route path='star' handler={StarList} />
                <Route path=':follow' handler={MemberFollow}>
                    <Route path=":skip" handler={MemberFollow} />
                </Route>
            </Route>
        </Route>

        <Route path='profile' handler={User}>
            <DefaultRoute handler={ProfileCenter}/>
            <Route path='setting' handler={Set} />
            <Route path='center' handler={ProfileCenter} />

            <Route path='contribute' handler={Contribute}>
                <Route path='/profile/contribute/:column'handler={MyContribute} />
            </Route>
            <Route path='notice' handler={Notice} />
            <Route path='star' handler={StarList} />
            <Route path='/post'>
                <Route path='article' handler={PostArticle}/>
            </Route>
            <Route path=":follow" handler={Follow}>
                <DefaultRoute handler={Follow} />
                <Route path=":page" handler={Follow}/>
            </Route>
            <Route path="*" handler={ProfileCenter} />
        </Route>

        <Route path="/tags" handler={TagList}>
            <Route path=":tag" handler={TagList} />
        </Route>

        <Route path=':column' handler={List}>
            <DefaultRoute handler={List} />
            <Route path=':skip' handler={List} />
        </Route>
        <Route path='*' handler={NotFound} />


    </Route>
);

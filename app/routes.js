/**
 * Created by apache on 15-10-23.
 */
const React = require('react');
const {Router, Route, DefaultRoute, Redirect} = require('react-router');
const App = require('./components/App');
const Home = require('./components/Home');
const Login = require('./components/Login');
const User = require('./components/User');
const Set = require('./components/Set');
const Notice = require('./components/Notice');
const StarList = require('./components/StarList');
const NotFound = require('./components/NotFound');
// 投稿
//const PostAnimate = require('./components/PostAnimate');
//const PostMusic = require('./components/PostMusic');
const PostArticle = require('./components/PostArticle');

const MyContribute = require('./components/MyContribute');

const ProfileCenter = require('./components/ProfileCenter');
//const Followers = require('./components/Followers');
//const Following = require('./components/Following');
const Follow = require('./components/Follow');
const Contribute = require('./components/Contribute');
const Article = require('./components/Article');
const List = require('./components/List');
const Member = require('./components/Member');
const ConArticle = require('./components/ConArticle');
//const Music = require('./components/Music');
const MemberCenter = require('./components/MemberCenter');
const MemberFollow = require('./components/MemberFollow');
const TagList = require('./components/TagList');
//const Animate = require('./components/Animate');
export default(
    <Route handler={App}>
        <Route path='/' handler={Home}>
            <Redirect from="/" to="/articles"/>
        </Route>
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

        <Route path='/profile' handler={User}>
            <DefaultRoute handler={ProfileCenter}/>
            <Route path='setting' handler={Set} />
            <Route path='center' handler={ProfileCenter} />

            <Route path='contribute' handler={Contribute}>
                <Route path='/profile/contribute/:column' handler={MyContribute} />
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

        <Route path='/:column' handler={List}>
            <DefaultRoute handler={List} />
            <Route path=':skip' handler={List} />
        </Route>
        <Route path='*' handler={NotFound} />


    </Route>
);

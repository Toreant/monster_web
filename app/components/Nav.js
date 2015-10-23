/**
 * Created by apache on 15-10-23.
 */
import React from 'react';

class Nav extends React.Component {
    render() {
        return (
            <nav className='navbar navbar-default mon-nav' id='mon-fixed-nav'>
                <div className='container'>
                    <div className='navbar-header'>
                        <button className='navbar-toggle collapsed' data-toggle='collapse' data-target='#my-nav'>
                            <span className='sr-only'>Toggle</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a href="/" className='navbar-brand'>Monster</a>
                    </div>
                    <div className='collapse navbar-collapse' id='my-nav'>
                        <ul className='nav navbar-nav'>
                            <li><a href="/monster1">首页</a></li>
                            <li><a href="/monster2">动漫</a></li>
                            <li><a href="/monster3">音乐</a></li>
                            <li><a href="/monster4">文章</a></li>
                        </ul>
                        <form className='navbar-form navbar-right' role='search'>
                            <div className='form-group'>
                                <input type="text" className='form-control' placeholder='输入搜索'/>
                            </div>
                            <button type='submit' className='btn btn-default search-btn'>Submit</button>
                        </form>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Nav;


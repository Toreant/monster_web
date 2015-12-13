/**
 * Created by apache on 15-10-22.
 */
var  React = require('react');
var Router = require('react-router');
var routes = require('./routes');

Router.run(routes,Router.HistoryLocation,(Handler) =>{
    React.render(<Handler />,document.getElementById('app'));
});
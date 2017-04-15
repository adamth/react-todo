const React         = require('react');
const ReactDOM      = require('react-dom');
const {Provider}    = require('react-redux');
var { 
    Route, 
    Router, 
    IndexRoute, 
    hashHistory 
}                   = require('react-router');

var TodoApp = require('TodoApp');

var actions = require('actions');
var store = require('configureStore').configure();

store.subscribe(() => {
    console.log('New state', store.getState());
});

// Load foundation
$(document).foundation();

// app.css
require('style!css!sass!applicationStyles');


ReactDOM.render(
    <Provider store={store}> 
        <TodoApp />
    </Provider>,
    document.getElementById('app')
);

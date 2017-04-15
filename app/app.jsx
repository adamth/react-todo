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
const TodoAPI = require('TodoAPI');

store.subscribe(() => {
    var state = store.getState()
    TodoAPI.setTodos(state.todos);
    console.log('New state', state);
});

var initialTodos = TodoAPI.getTodos();
store.dispatch(actions.addTodos(initialTodos));

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

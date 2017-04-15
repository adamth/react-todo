const redux = require('redux');

const {searchTextReducer, showCompletedReducer, todoReducer} = require('reducers');

export var configure = (initState = {}) => {
    var reducer = redux.combineReducers({
        searchText: searchTextReducer,
        showCompleted: showCompletedReducer,
        todos: todoReducer
    });

    var store = redux.createStore(reducer, initState, redux.compose(
        window.devToolsExtension ? window.devToolsExtension() : f => f
    ));

    return store;
};
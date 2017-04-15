const React         = require('react');
const ReactDOM      = require('react-dom');
const {Provider}    = require('react-redux');
const expect        = require('expect');
const $             = require('jQuery');
const testUtils     = require('react-dom/test-utils');

import {configure} from 'configureStore';
import ConnectedTodoList, {TodoList} from 'TodoList';
import ConnectedTodo, {Todo} from 'Todo';

describe('TodoList', () => {
    it('should exist', () => {
        expect(TodoList).toExist();
    });

    it('should render one todo component for each todo item', () => {
        var todos = [{
                        id: 1,
                        text: 'Walk the dog',
                        completed: false,
                        completedAt: undefined,
                        createdAt: 500
                    },
                    {
                        id: 2,
                        text: 'Clean the yard',
                        completed: false,
                        completedAt: undefined,
                        createdAt: 500
                    }];

        var store = configure({
            todos
        });

        var provider = testUtils.renderIntoDocument(
            <Provider store={store}>
                <ConnectedTodoList />
            </Provider>);    
        var todoList = testUtils.scryRenderedComponentsWithType(provider, ConnectedTodoList)[0];
        var todosComponents = testUtils.scryRenderedComponentsWithType(todoList, ConnectedTodo);

        expect(todosComponents.length).toBe(todos.length);
    });

    it('should render and empty message if no todos', () => {
        var todos = [];
            
        var todoList = testUtils.renderIntoDocument(<TodoList todos={todos}/>);
        var $el = $(ReactDOM.findDOMNode(todoList));

        expect($el.find('.container__message').length).toBe(1);
    });
});
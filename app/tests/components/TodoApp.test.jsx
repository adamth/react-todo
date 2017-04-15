const React         = require('react');
const ReactDOM      = require('react-dom');
const expect        = require('expect');
const $             = require('jQuery');
const testUtils     = require('react-dom/test-utils');
const {Provider}    = require('react-redux');

const configureStore    = require('configureStore');
const TodoApp           = require('TodoApp');
import TodoList from 'TodoList';

describe('TodoApp', () => {
    it('should exist', () => {
        expect(TodoApp).toExist();
    });

    it('should render todoList', () => {
        var store = configureStore.configure();
        var provider = testUtils.renderIntoDocument(
            <Provider store={store}>  
                <TodoApp />
            </Provider>
        );

        var todoApp = testUtils.scryRenderedComponentsWithType(provider, TodoApp)[0];
        var todoList = testUtils.scryRenderedComponentsWithType(todoApp, TodoList);

        expect(todoList.length).toEqual(1);
    });
});
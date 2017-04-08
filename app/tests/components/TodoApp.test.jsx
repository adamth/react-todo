const React         = require('react');
const ReactDOM      = require('react-dom');
const expect        = require('expect');
const $             = require('jQuery');
const testUtils     = require('react-addons-test-utils');
const TodoApp     = require('TodoApp');

describe('TodoApp', () => {
    it('should exist', () => {
        expect(TodoApp).toExist();
    });

    it('should add todo to the todos state on handleAddTodo', () => {
        var todoText = 'Test text';

        var todoApp = testUtils.renderIntoDocument(<TodoApp />);
        todoApp.setState({todos: []});
        todoApp.handleAddTodo(todoText);

        expect(todoApp.state.todos[0].text).toBe(todoText); 
    });

    it('should toggle complete value when handle toggle called', () => {
        var todoData = {
            id: 11,
            text: 'Test',
            completed: false
        }

        var todoApp = testUtils.renderIntoDocument(<TodoApp />);
        todoApp.setState({todos: [todoData]});

        expect(todoApp.state.todos[0].completed).toBe(false);
        todoApp.handleToggle(todoData.id);
        expect(todoApp.state.todos[0].completed).toBe(true);

    });
});
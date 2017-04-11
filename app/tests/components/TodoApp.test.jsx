const React         = require('react');
const ReactDOM      = require('react-dom');
const expect        = require('expect');
const $             = require('jQuery');
const testUtils     = require('react-dom/test-utils');
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
        expect(todoApp.state.todos[0].createdAt).toBeA('number');
    });

    it('should toggle complete value when handle toggle called', () => {
        var todoData = {
            id: 11,
            text: 'Test',
            completed: false,
            createdAt: 0,
            completedAt: undefined
        }

        var todoApp = testUtils.renderIntoDocument(<TodoApp />);
        todoApp.setState({todos: [todoData]});

        expect(todoApp.state.todos[0].completed).toBe(false);
        todoApp.handleToggle(todoData.id);
        expect(todoApp.state.todos[0].completed).toBe(true);
        expect(todoApp.state.todos[0].completedAt).toBeA('number');
    });

        it('should removed completed at data when completed set to false', () => {
        var todoData = {
            id: 11,
            text: 'Test',
            completed: true,
            createdAt: 1,
            completedAt: 2
        }

        var todoApp = testUtils.renderIntoDocument(<TodoApp />);
        todoApp.setState({todos: [todoData]});

        expect(todoApp.state.todos[0].completedAt).toBe(2);
        todoApp.handleToggle(todoData.id);
        expect(todoApp.state.todos[0].completedAt).toNotExist();
    });
});
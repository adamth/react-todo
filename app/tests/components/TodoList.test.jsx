const React         = require('react');
const ReactDOM      = require('react-dom');
const expect        = require('expect');
const $             = require('jQuery');
const testUtils     = require('react-dom/test-utils');
const TodoList      = require('TodoList');
const Todo          = require('Todo');

describe('TodoList', () => {
    it('should exist', () => {
        expect(TodoList).toExist();
    });

    it('should render one todo component for each todo item', () => {
        var todos = [{
                        id: 1,
                        text: 'Walk the dog'
                    },
                    {
                        id: 2,
                        text: 'Clean the yard'
                    }];
            
        var todoList = testUtils.renderIntoDocument(<TodoList todos={todos}/>);
        var todosComponents = testUtils.scryRenderedComponentsWithType(todoList, Todo);

        expect(todosComponents.length).toBe(todos.length);
    });

    it('should render and empty message if no todos', () => {
        var todos = [];
            
        var todoList = testUtils.renderIntoDocument(<TodoList todos={todos}/>);
        var $el = $(ReactDOM.findDOMNode(todoList));

        expect($el.find('.container__message').length).toBe(1);
    });
});
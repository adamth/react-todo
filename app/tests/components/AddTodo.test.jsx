const React         = require('react');
const ReactDOM      = require('react-dom');
const expect        = require('expect');
const $             = require('jQuery');
const testUtils     = require('react-dom/test-utils');
const AddTodo       = require('AddTodo');

describe('AddTodo', () => {
    it('should exist', () => {
        expect(AddTodo).toExist();
    });

    it('should add a valid todo', () => {
        var todoText = "Write some tests";
        var spy = expect.createSpy();

        var addTodo = testUtils.renderIntoDocument(<AddTodo addTodo={spy}/>);
        var $el = $(ReactDOM.findDOMNode(addTodo));

        addTodo.refs.todoText.value = todoText;
        testUtils.Simulate.submit($el.find('form')[0]);

        expect(spy).toHaveBeenCalledWith(todoText);
    });

    it('should not add an invalid todo', () => {
        var spy = expect.createSpy();

        var addTodo = testUtils.renderIntoDocument(<AddTodo addTodo={spy}/>);
        var $el = $(ReactDOM.findDOMNode(addTodo));

        addTodo.refs.todoText.value = "";
        testUtils.Simulate.submit($el.find('form')[0]);

        expect(spy).toNotHaveBeenCalled();
    });
});
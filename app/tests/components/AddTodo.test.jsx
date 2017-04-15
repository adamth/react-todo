const React         = require('react');
const ReactDOM      = require('react-dom');
const expect        = require('expect');
const $             = require('jQuery');
const testUtils     = require('react-dom/test-utils');
const {AddTodo}       = require('AddTodo');

describe('AddTodo', () => {
    it('should exist', () => {
        expect(AddTodo).toExist();
    });

    it('should dispatch ADD_TODO when valid todo text', () => {
        var todoText = "Write some tests";
        var spy = expect.createSpy();
        var action = {
            type: 'ADD_TODO',
            text: todoText
        };

        var addTodo = testUtils.renderIntoDocument(<AddTodo dispatch={spy}/>);
        var $el = $(ReactDOM.findDOMNode(addTodo));

        addTodo.refs.todoText.value = todoText;
        testUtils.Simulate.submit($el.find('form')[0]);

        expect(spy).toHaveBeenCalledWith(action);
    });

    it('should not dispatch ADD_TODO when invalid todo text', () => {
        var spy = expect.createSpy();

        var addTodo = testUtils.renderIntoDocument(<AddTodo dispatch={spy}/>);
        var $el = $(ReactDOM.findDOMNode(addTodo));

        addTodo.refs.todoText.value = "";
        testUtils.Simulate.submit($el.find('form')[0]);

        expect(spy).toNotHaveBeenCalled();
    });
});
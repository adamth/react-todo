const React         = require('react');
const ReactDOM      = require('react-dom');
const expect        = require('expect');
const $             = require('jQuery');
const testUtils     = require('react-dom/test-utils');
const {Todo}          = require('Todo');

describe('Todo', () => {
    it('should exist', () => {
        expect(Todo).toExist();
    });

    it('should dispatch TOGGLE_TODO action on click', () => {
        var todoData = {
            id: 11,
            text: 'Test',
            completed: false
        }

        var spy = expect.createSpy();
        var todo = testUtils.renderIntoDocument(<Todo {...todoData} dispatch={spy} />);

        var $el = $(ReactDOM.findDOMNode(todo));

        testUtils.Simulate.click($el[0]);

        expect(spy).toHaveBeenCalledWith({
            type: 'TOGGLE_TODO',
            id: todoData.id
        });
    });
});
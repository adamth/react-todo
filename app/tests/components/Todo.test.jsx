const React         = require('react');
const ReactDOM      = require('react-dom');
const expect        = require('expect');
const $             = require('jQuery');
const testUtils     = require('react-addons-test-utils');
const Todo          = require('Todo');

describe('Todo', () => {
    it('should exist', () => {
        expect(Todo).toExist();
    });

    it('should call onToggle prop with id on click', () => {
        var todoData = {
            id: 11,
            text: 'Test',
            completed: false
        }

        var spy = expect.createSpy();
        var todo = testUtils.renderIntoDocument(<Todo {...todoData} onToggle={spy} />);

        var $el = $(ReactDOM.findDOMNode(todo));

        testUtils.Simulate.click($el[0]);

        expect(spy).toHaveBeenCalledWith(todoData.id);
    });
});
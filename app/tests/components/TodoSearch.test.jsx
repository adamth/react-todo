const React         = require('react');
const ReactDOM      = require('react-dom');
const expect        = require('expect');
const $             = require('jQuery');
const testUtils     = require('react-dom/test-utils');
const TodoSearch    = require('TodoSearch');

describe('TodoSearch',() => {
    it('should exist', () => {
        expect(TodoSearch).toExist();
    });

    it('should call onSearch with entered input text', () => {
        var spy = expect.createSpy();
        var searchText = 'Dog';
        var todoSearch = testUtils.renderIntoDocument(<TodoSearch onSearch={spy} />);

        todoSearch.refs.searchText.value = searchText;

        testUtils.Simulate.change(todoSearch.refs.searchText);

        expect(spy).toHaveBeenCalledWith(false, searchText);
    });

    it('should call onSeach when showCompleted is checked', () => {
        var spy = expect.createSpy();
        var todoSearch = testUtils.renderIntoDocument(<TodoSearch onSearch={spy} />);

        todoSearch.refs.showCompleted.checked = true;

        testUtils.Simulate.change(todoSearch.refs.showCompleted);

        expect(spy).toHaveBeenCalledWith(true, '');
    });
    
});
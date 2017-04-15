const React         = require('react');
const ReactDOM      = require('react-dom');
const expect        = require('expect');
const $             = require('jQuery');
const testUtils     = require('react-dom/test-utils');
import {TodoSearch} from 'TodoSearch';

describe('TodoSearch',() => {
    it('should exist', () => {
        expect(TodoSearch).toExist();
    });

    it('should dispatch SET_SEARCH_TEXT on input change', () => {
        var spy = expect.createSpy();
        var searchText = 'Dog';
        var action = {
            type: 'SET_SEARCH_TEXT',
            searchText
        }
        var todoSearch = testUtils.renderIntoDocument(<TodoSearch dispatch={spy} />);

        todoSearch.refs.searchText.value = searchText;

        testUtils.Simulate.change(todoSearch.refs.searchText);

        expect(spy).toHaveBeenCalledWith(action);
    });

    it('should dispatch TOGGLE_SHOW_COMPLETE when checkbox checked', () => {
        var spy = expect.createSpy();
        var action = {
            type: 'TOGGLE_SHOW_COMPLETED'
        };
        var todoSearch = testUtils.renderIntoDocument(<TodoSearch dispatch={spy} />);

        todoSearch.refs.showCompleted.checked = true;

        testUtils.Simulate.change(todoSearch.refs.showCompleted);

        expect(spy).toHaveBeenCalledWith(action);
    });
    
});
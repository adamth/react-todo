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
});
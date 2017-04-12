const expect = require('expect');
const df = require('deep-freeze-strict');

const reducers = require('reducers');

describe('Reducers',() => {
    describe('searchTextReducer', () => {
        it('should set search text', () => {
            var action = {
                type: 'SET_SEARCH_TEXT',
                searchText: 'dog'
            };

            var res = reducers.searchTextReducer(df(''), df(action));

            expect(res).toEqual(action.searchText);
        });
    });

    describe('showCompletedReducer', () => {
        it('should toggle show completed value', () => {
            var action = {
                type: 'TOGGLE_SHOW_COMPLETED'
            };

            var res = reducers.showCompletedReducer(df(false), df(action));

            expect(res).toEqual(true);
        });
    });

    describe('todosReducer', () => {
        it('should add new todo', () => {
            var action = {
                type:'ADD_TODO',
                text:'Walk'
            }

            var res = reducers.todoReducer(df([]), df(action));

            expect(res.length).toBe(1);
            expect(res[0].text).toEqual(action.text);
        });

         it('should toggle a todo', () => {
            var action = {
                type:'TOGGLE_TODO',
                id:1
            }

            var todo = [{
                    id: 1,
                    text: 'Text',
                    completed: false,
                    createdAt: 1,
                    completedAt: undefined
                }];

            var res = reducers.todoReducer(df(todo), df(action));

            expect(res.length).toBe(1);
            expect(res[0].completed).toBe(true);
            expect(res[0].completedAt).toBeA('number');
        });
    });
});
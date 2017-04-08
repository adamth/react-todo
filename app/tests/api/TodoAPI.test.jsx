const expect        = require('expect');

const TodoAPI = require('TodoAPI');

describe('TodoAPI', () => {
    beforeEach(() => {
        localStorage.removeItem('todos');
    });
    it('should exist', () => {
        expect(TodoAPI).toExist();
    });

    describe('setTodos', () => {
        it('should set valid todos array', () => {
            var todos = [{
                id: 1,
                text: 'Test',
                completed: false
            }];

            TodoAPI.setTodos(todos);

            var actualTodos = JSON.parse(localStorage.getItem('todos'));

            expect(todos).toEqual(actualTodos);
        });

        it('should not set invalid todos array', () => {
            var todos = {a: 'b'};

            TodoAPI.setTodos(todos);

            expect(localStorage.getItem('todos')).toBe(null);
        });
    });

    describe('getTodos', () => {
        it('should return empty array for bad local storage data', () => {
            var actualTodos = TodoAPI.getTodos();

            expect(actualTodos).toEqual([]);
        });

        it('should return todos if valid array in local storage', () => {
            var todos = [{
                id: 1,
                text: 'Test',
                completed: false
            }];
            localStorage.setItem('todos', JSON.stringify(todos));
            var actualTodos = TodoAPI.getTodos();
            expect(actualTodos).toEqual(todos);
        });
    });

    describe('filterTodos',() => {
        var todos = [
            {
                id: 1,
                text: 'Some text',
                completed: true
            },
            {
                id: 2,
                text: 'Other text',
                completed: false
            },
            {
                id: 3,
                text: 'Even more text',
                completed: true
            },
        ]

        it('should return all items if show completed is true', () => {
            var filteredTodos = TodoAPI.filterTodos(todos, true, '');
            expect(filteredTodos.length).toBe(3);
        });

        it('should return todos that have not been completed', () => {
            var filteredTodos = TodoAPI.filterTodos(todos, false, '');
            expect(filteredTodos.length).toBe(1);
        });

        it('should sort by completed status', () => {
            var filteredTodos = TodoAPI.filterTodos(todos, true, '');
            expect(filteredTodos[0].completed).toBe(false);
        });

        it('should return todos with matching text', () => {
            var filteredTodos = TodoAPI.filterTodos(todos, true, 'Even');
            expect(filteredTodos.length).toBe(1);
        });

    });
});
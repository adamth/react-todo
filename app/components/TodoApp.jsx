const React = require('react');

const TodoList = require('TodoList');
const AddTodo = require('AddTodo');

var TodoApp = React.createClass({
    getInitialState: function () {
        return {
            todos: [
                {
                    id: 1,
                    text: 'Walk the dog'
                },
                {
                    id: 2,
                    text: 'Clean the yard'
                },
                {
                    id: 3,
                    text: 'Work on node stuff'
                },
                {
                    id: 4,
                    text: 'Go to sleep'
                }
            ]
        };
    },
    handleAddTodo: function (text) {
        alert('New todo:' + text);
    },
    render: function () {
        var {todos} = this.state;
        return (
            <div>
                <TodoList todos={todos}/>
                <AddTodo addTodo={this.handleAddTodo} />
            </div>
            
        );
    }
});

module.exports = TodoApp;
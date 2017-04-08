const React = require('react');

var AddTodo = React.createClass({
    onSubmit: function (e) {
        e.preventDefault();

        if(this.refs.todoText.value.length > 0)
        {
            this.props.addTodo(this.refs.todoText.value)
            this.refs.todoText.value = '';
        } else {
            this.refs.todoText.focus();
        }
    },
    render: function () {
        return (
            <div className="container__footer">
                <form onSubmit={this.onSubmit}>
                    <input type="text" ref="todoText" placeholder="Add new todo"/>
                    <button className="button expanded">Add</button>
                </form>
            </div>
            
        );
    }
});

module.exports = AddTodo;
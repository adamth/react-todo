const React = require('react');

var Todo = React.createClass({
    render: function () {
        var {text,id, completed} = this.props;   
        return (
            <div onClick={() => {
                    this.props.onToggle(id);
                }}>
                <input type="checkbox" ref="todoCompleted" checked={completed}/> {text}
            </div>
        );
    }
});

module.exports = Todo;
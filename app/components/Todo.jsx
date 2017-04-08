const React = require('react');
const moment = require('moment');

var Todo = React.createClass({
    render: function () {
        var {text,id, completed, createdAt, completedAt} = this.props; 
        var renderDate = () => {
            var message = 'Created ';
            var timestamp = createdAt;

            if(completed){
                message = 'Completed ';
                timestamp = completedAt;
            }

            return message + moment.unix(timestamp).format('MMM Do YYYY @ h:mm a');
        };
        return (
            <div onClick={() => {
                    this.props.onToggle(id);
                }}>
                <input type="checkbox" ref="todoCompleted" checked={completed}/> 
                <p>
                    {text}
                </p>
                {renderDate()}
            </div>
        );
    }
});

module.exports = Todo;
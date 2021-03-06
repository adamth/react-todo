const React = require('react');
const moment = require('moment');
const { connect } = require('react-redux');

const actions = require('actions');

export class Todo extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        var { text, id, completed, createdAt, completedAt, dispatch } = this.props;
        var todoClassName = completed ? 'todo todo-completed' : 'todo';
        var renderDate = () => {
            var message = 'Created ';
            var timestamp = createdAt;

            if (completed) {
                message = 'Completed ';
                timestamp = completedAt;
            }

            return message + moment.unix(timestamp).format('MMM Do YYYY @ h:mm a');
        };

        return (
            <div className={todoClassName} onClick={() => {
                dispatch(actions.toggleTodo(id));
            }}>
                <div>
                    <input type="checkbox" ref="todoCompleted" checked={completed} />
                </div>
                <div>
                    <p>{text}</p>
                    <p className="todo__subtext">{renderDate()}</p>
                </div>
            </div>
        );
    }
};

/*export var Todo = React.createClass({
    render: function () {
        var { text, id, completed, createdAt, completedAt, dispatch } = this.props;
        var todoClassName = completed ? 'todo todo-completed' : 'todo';
        var renderDate = () => {
            var message = 'Created ';
            var timestamp = createdAt;

            if (completed) {
                message = 'Completed ';
                timestamp = completedAt;
            }

            return message + moment.unix(timestamp).format('MMM Do YYYY @ h:mm a');
        };
        return (
            <div className={todoClassName} onClick={() => {
                dispatch(actions.toggleTodo(id));
            }}>
                <div>
                    <input type="checkbox" ref="todoCompleted" checked={completed} />
                </div>
                <div>
                    <p>{text}</p>
                    <p className="todo__subtext">{renderDate()}</p>
                </div>
            </div>
        );
    }
});*/

export default connect()(Todo);
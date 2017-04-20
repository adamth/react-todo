const React = require('react');
const { connect } = require('react-redux');
const actions = require('actions');

export class AddTodo extends React.Component {
    constructor(props) {
        super(props);
    };

    onSubmit = (e) => {
        e.preventDefault();
        var todoText = this.refs.todoText.value;
        var { dispatch } = this.props;
        if (todoText.length > 0) {
            this.refs.todoText.value = '';
            dispatch(actions.addTodo(todoText));
        } else {
            this.refs.todoText.focus();
        }
    };

    render() {
        return (
            <div className="container__footer">
                <form onSubmit={this.onSubmit}>
                    <input type="text" ref="todoText" placeholder="Add new todo" />
                    <button className="button expanded">Add</button>
                </form>
            </div>

        );
    };
};

/*export var AddTodo = React.createClass({
    onSubmit: function (e) {
        e.preventDefault();
        var todoText = this.refs.todoText.value;
        var {dispatch} = this.props;
        
        if(todoText.length > 0)
        {
            this.refs.todoText.value = '';
            dispatch(actions.addTodo(todoText));
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
});*/

export default connect()(AddTodo);
const React = require('react');

var TodoApp = React.createClass({
    render: function () {
        return (
            <div className="row">
                <div className="column small-centered">
                    <h1 className="sorry">Sorry I can't hang tonight</h1>
                </div>
                <div className="column small-centered">
                    <img className="gong" src="https://media.giphy.com/media/AHfqbsP51mMQE/giphy.gif" alt="gonnnng"/>
                </div>
            </div>
            
        );
    }
});

module.exports = TodoApp;
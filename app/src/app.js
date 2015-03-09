'use strict';

var React = require('react');

var Hello = React.createClass({
    render: function() {
        var element = React.createElement('div', null, 'Hello, React!');
        return element;
    }
});

React.render(
    React.createElement(Hello),
    document.body
);

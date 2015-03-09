'use strict';

require('./Root.styl');

var React = require('react');

/**
 * Root component, once on page
 */
var Root = React.createClass({
    render: function() {
        return (
            <div className="root">Hello, JSX!</div>
        );
    }
});

module.exports = Root;

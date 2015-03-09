'use strict';

require('./Root.styl');

/**
 * Root component, once on page
 */
var Root = React.createClass({
    render: function() {
        return (
            <div className="root">Hello, React!</div>
        );
    }
});

module.exports = Root;

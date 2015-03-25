'use strict';

var b = Block('content');

/**
 * Content component
 */
class Content extends React.Component {
    render() {
        return (
            <div className={b}>
                Content of component «Content»
            </div>
        );
    }
}

module.exports = Content;

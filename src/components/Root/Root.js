'use strict';

import Menu from '../Menu/Menu.js';
import Content from '../Content/Content.js';

var b = Block('root');

/**
 * Root component, once on page
 */
class Root extends React.Component{
    render() {
        return (
            <div className={b}>
                <Menu />
                <Content />
            </div>
        );
    }
}

module.exports = Root;

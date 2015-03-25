'use strict';

import Menu from '../Menu/Menu.js';
import Content from '../Content/Content.js';

let {DefaultRoute, Route, RouteHandler} = Router;
let b = Block('root');

/**
 * Root component, once on page
 */
class Root extends React.Component{
    render() {
        return (
            <div className={b}>
                <Menu/>
                <RouteHandler/>
            </div>
        );
    }
}

Root.contextTypes = {
    router: React.PropTypes.func
};

let routes = (
    <Route handler={Root} path="/">
        <Route name="index" handler={Content}/>
        <Route name="about" handler={Content}/>
        <Route name="contacts" handler={Content}/>
        <DefaultRoute handler={Content}/>
    </Route>
);

module.exports = { Root, routes };

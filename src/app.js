'use strict';

import {Root, routes} from './components/Root/Root.js';

Router.run(routes, Router.HistoryLocation, function (Handler) {
    React.render(<Handler/>, document.body);
});

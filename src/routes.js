import React from 'react';
import {Route, IndexRoute} from 'react-router'
// Own components
import App from './containers/App';

import {Home} from './components';
import ComponentsRoutes from './components/routes';

export default
(
    <Route path={App.path} component={App}>
        <IndexRoute component={Home}/>
        {ComponentsRoutes}
    </Route>
);

import React from 'react';
import {Route, IndexRoute} from 'react-router'
// Own components
import App from './containers/App';

import {HomePage} from './pages';
import PagesRoutes from './pages/routes';

export default
(
    <Route path={App.path} component={App}>
        <IndexRoute component={HomePage}/>

        { PagesRoutes }
    </Route>
);

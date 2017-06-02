import React from 'react';
import {Route, Switch} from 'react-router';

import Home from './home.jsx';
import AdminRoutes from './admin/routes';

export default
(
    <Route>
        <Route path={Home.path} component={Home}/>
        {AdminRoutes}
    </Route>
);

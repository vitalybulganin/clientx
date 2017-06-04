import React from 'react';
import {Route} from 'react-router';

import Home from '../pages/home/home.jsx';
import AdminRoutes from './admin/routes';
import ErrorPage from '../pages/error/error.jsx';

export default
(
    <Route>
        <Route path={Home.path} component={Home}/>
        <Route path='*' component={ErrorPage}/>

        {AdminRoutes}

    </Route>
);

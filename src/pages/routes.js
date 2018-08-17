import React from 'react';
import {Route} from 'react-router';
import ErrorRoutes from './error/routes';
import HomeRoutes from './home/routes';
import ClientsRoutes from './clients/routes';
import InstructorsRoutes from './instructors/routes';
import AdminRoutes from './admin/routes';

export default (
    <Route>
        {HomeRoutes}
        {ClientsRoutes}
        {InstructorsRoutes}
        {AdminRoutes}
        {ErrorRoutes}
    </Route>
);

import React from 'react';
import {Route} from 'react-router';
import ClientsPage from './clients.jsx';

export default (
    <Route>
        <Route path={ClientsPage.path} component={ClientsPage}/>
    </Route>
);

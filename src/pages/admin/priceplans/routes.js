import React from 'react';
import {Route} from 'react-router';
import PricePlansPage from './priceplans.jsx';

export default (
    <Route>
        <Route path={PricePlansPage.path} component={PricePlansPage}/>
    </Route>
);

import React from 'react';
import {Route} from 'react-router';
import RatesPage from './rates.jsx';

export default (
    <Route>
        <Route path={RatesPage.path} component={RatesPage}/>
    </Route>
);

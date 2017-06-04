import React from 'react';
import {Route} from 'react-router';
import ErrorPage from './error.jsx';

export default (
    <Route>
        <Route path='*' component={ErrorPage}/>
    </Route>
);

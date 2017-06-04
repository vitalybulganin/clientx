import React from 'react';
import {Route} from 'react-router';
import InstructorsPage from './instructors.jsx';

export default (
    <Route>
        <Route path={InstructorsPage.path} component={InstructorsPage}/>
    </Route>
);

import React from 'react';
import {Route} from 'react-router';
//
import {Clients, Instructors, Skills, Rates, PricePlans} from './';

export default (
    <Route>
        <Route path={Clients.path} component={Clients}/>
        <Route path={Instructors.path} component={Instructors}/>
        <Route path={Skills.path} component={Skills}/>
        <Route path={Rates.path} component={Rates}/>
        <Route path={PricePlans.path} component={PricePlans}/>
    </Route>
);

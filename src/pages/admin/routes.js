import React from 'react';
import {Route} from 'react-router';

import PricePlansRoutes from './priceplans/routes';
import RatesRoutes from './rates/routes';
import SkillsRoutes from './skills/routes';

export default (
    <Route>
        {RatesRoutes}
        {SkillsRoutes}
        {PricePlansRoutes}
    </Route>
);

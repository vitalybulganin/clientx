import React from 'react';
import {Route} from 'react-router';
import SkillsPage from './skills.jsx';

export default (
    <Route>
        <Route path={SkillsPage.path} component={SkillsPage}/>
    </Route>
);

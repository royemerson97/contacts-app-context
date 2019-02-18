import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Contacts from './contacts/contacts-main.component';

export const AppRoutes = () => (
    <Switch>
        <Route  path="/contacts" component={Contacts}/>
    </Switch>
)
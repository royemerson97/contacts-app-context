import React from 'react'
import {Switch, Route} from 'react-router-dom'
import { Contacts } from './contacts/contacts.routes';

export const AppRoutes = () => (
    <Switch>
        <Route path="/contacts" component={Contacts}/>
    </Switch>
);
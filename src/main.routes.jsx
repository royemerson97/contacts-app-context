import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Contacts from './contacts/components/contacts-main.component';
import { ContactsHooks } from './contacts.hooks/contacts.hooks.routes';

export const AppRoutes = () => (
    <Switch>
        <Route path="/contacts" component={Contacts}/>
        <Route path="/contactshooks" component={ContactsHooks}/>
    </Switch>
)
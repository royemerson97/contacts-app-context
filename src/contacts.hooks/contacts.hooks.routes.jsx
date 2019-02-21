import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { ContactsHooksForm } from './components/contacts-form.hooks';
import { ContactsContextProvider } from './reducer/contacts.hooks.context';
import { ContactsHooksList } from './components/contacts-list.hooks';

export const ContactsHooks = (props) => (
    <ContactsContextProvider>
        <Switch>
            <Route exact path={`${props.match.path}/`} component={ContactsHooksList} />
            <Route path={`${props.match.path}/add`} component={ContactsHooksForm}/>
        </Switch>
    </ContactsContextProvider>
)
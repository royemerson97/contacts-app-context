import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { ContactsHooksForm } from './components/contacts-form.hooks';
import { ContactsContextProvider } from './state/contacts.hooks.context';
import { ContactsHooksList } from './components/contacts-list.hooks';
import { ContactsEditForm } from './components/contacts-edit.hooks';

export const ContactsHooks = (props) => (
    <ContactsContextProvider>
        <Switch>
            <Route exact path={`${props.match.path}/`} component={ContactsHooksList} />
            <Route path={`${props.match.path}/add`} component={ContactsHooksForm}/>
            <Route path={`${props.match.path}/edit/:id`} render={(props) =>
                <ContactsEditForm {...props}/>
            }/>
        </Switch>
    </ContactsContextProvider>
)
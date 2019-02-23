import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { ContactsForm } from './components/contacts-form';
import { ContactsContextProvider } from './state/contacts.context';
import { ContactsList } from './components/contacts-list';
import { ContactsEditForm } from './components/contacts-edit';

export const Contacts = (props) => (
    <ContactsContextProvider>
        <Switch>
            <Route exact path={`${props.match.path}/`}  render={(props) =>
                <ContactsList {...props}/>
            }/>
            <Route path={`${props.match.path}/add`} component={ContactsForm}/>
            <Route path={`${props.match.path}/:id`} render={(props) =>
                <ContactsEditForm {...props}/>
            }/>
        </Switch>
    </ContactsContextProvider>
)
import React from 'react';
import {Switch, Route}  from 'react-router-dom';
import { ContactsForm } from './contacts-form.component';
import { ContactsList } from './contacts-list.component';

export const ContactsRoutes = (props) => (
    <Switch>
        <Route exact path={`${props.match.path}/`} component={ContactsList} />
        <Route path={`${props.match.path}/add`} component={ContactsForm}/>
    </Switch>
);

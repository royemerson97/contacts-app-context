import React, { useContext } from 'react'
import { List } from 'antd'
import { Link } from 'react-router-dom'
import { ContactsContext } from '../state/contacts.hooks.context';

export const ContactsHooksList = () => {
    const { state } = useContext(ContactsContext);
    return (
        <List
            header={<div>Contact List <Link to="/contactshooks/add">Add contact</Link></div>}
            bordered
            dataSource={state.contacts}
            renderItem={contact => (<List.Item>Name : {contact.name}, Last name : {contact.lastName}, email : {contact.email}</List.Item>)}>
        </List>
    );
}
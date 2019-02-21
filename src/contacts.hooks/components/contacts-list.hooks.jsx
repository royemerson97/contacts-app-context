import React, { useContext } from 'react'
import { List } from 'antd'
import { Link } from 'react-router-dom'
import { ContactsContext } from '../reducer/contacts.hooks.context';

export const ContactsHooksList = () => {
    const { state } = useContext(ContactsContext);
    return (
        <List
            header={<div>Contact List <Link to="/contactshooks/add">Add contact</Link></div>}
            bordered
            dataSource={state.contacts}
            renderItem={contact => (<List.Item>{contact.name}</List.Item>)}>
        </List>
    );
}
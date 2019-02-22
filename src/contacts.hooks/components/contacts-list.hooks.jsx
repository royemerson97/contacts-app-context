import React, { useContext } from 'react'
import { List, Button } from 'antd'
import { Link } from 'react-router-dom'
import { ContactsContext } from '../state/contacts.hooks.context';
import { DeleteContact } from '../state/contacts.hooks.actions';

export const ContactsHooksList = () => {
    const { state: { contacts } , dispatch } = useContext(ContactsContext);
    const handleDeleteButtonClick = (id) =>{
        dispatch(
            DeleteContact(id)
        );
    }
    return (
        <List
            header={<div>Contact List <Link to="/contactshooks/add">Add contact</Link></div>}
            bordered
            dataSource={contacts}
            renderItem={contact => (
                <List.Item>
                    Name : {contact.name}, Last name : {contact.lastName}, email : {contact.email}
                    <Link to={`/contactshooks/edit/${contact.id}`}>Edit contact</Link>
                    <Button onClick={() => handleDeleteButtonClick(contact.id)} type="danger">Delete contact</Button>
                </List.Item>
            )}>
            {console.log(contacts)}
        </List>
    );
}
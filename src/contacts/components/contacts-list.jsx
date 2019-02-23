import React, { useContext } from 'react'
import { List, Button } from 'antd'
import { Link } from 'react-router-dom'
import { ContactsContext } from '../state/contacts.context';
import { DeleteContact } from '../state/contacts.actions';

export const ContactsList = ({history}) => {
    const { state: { contacts } , dispatch } = useContext(ContactsContext);
    const handleDeleteButtonClick = (id) =>{
        dispatch(
            DeleteContact(id)
        );
    };
    return (
        <List
            header={<div>Contact List <Link to="/contacts/add">Add contact</Link></div>}
            bordered
            dataSource={contacts}
            renderItem={contact => (
                <List.Item>
                    Name : {contact.name}, Last name : {contact.lastName}, email : {contact.email}
                    <Button type="primary" htmlType="button" onClick={() => history.push(`/contacts/${contact.id}`)}>Edit contact</Button>
                    <Button onClick={() => handleDeleteButtonClick(contact.id)} type="danger" htmlType="button">Delete contact</Button>
                </List.Item>
            )}>
            {console.log(contacts)}
        </List>
    );
}
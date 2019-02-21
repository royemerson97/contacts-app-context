import React from 'react'
import { ContactsConsumer } from '../context/contacts.context';
import { List } from 'antd'
import {Link} from 'react-router-dom'

export const ContactsList = () => (
    <ContactsConsumer>
        {context =>
            <List
                header={<div>Contact List <Link to="/contacts/add">Add contact</Link></div>}
                bordered
                dataSource={context.data.contacts}
                renderItem={contact => (<List.Item>{contact.name }</List.Item>)}>
            </List>
        }
    </ContactsConsumer>
)
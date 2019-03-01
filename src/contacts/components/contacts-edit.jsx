//@flow
import React, { useRef, useContext } from 'react';
import { ContactsContext } from '../state/contacts.context';
import { Form, Input, Button } from 'antd';
import { UpdateContact } from '../state/contacts.actions';

export const ContactsEditForm = (props : Object) => {
    const { history } = props;
    const { id } = props.match.params;
    const { dispatch, state: { contacts } } = useContext(ContactsContext);
    const name : Object = useRef(null);
    const lastName : Object = useRef(null);
    const email : Object = useRef(null);
    const contact : Object = contacts !== [] ? contacts.find(contact => contact.id === Number(id)) : {};
    const handleSubmit = (e : Object) => {
        e.preventDefault();
        dispatch(UpdateContact(
            Number(id),
            name.current.state.value,
            lastName.current.state.value,
            email.current.state.value
        ));
        history.push('/contacts')
    };
    return (
        <Form className="login-form" onSubmit={handleSubmit}>
            <Form.Item>
                <h4>Edit contact</h4>
            </Form.Item>
            <Form.Item>
                <Input placeholder="Enter your name" ref={name} defaultValue={contact ? contact.name : null} />
            </Form.Item>
            <Form.Item>
                <Input placeholder="Enter your lastname" ref={lastName} defaultValue={contact ? contact.lastName : null} />
            </Form.Item>
            <Form.Item>
                <Input placeholder="Enter your email" ref={email} defaultValue={contact ? contact.email : null} />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Edit contact
                </Button>{console.log(contact)}
                {console.log(contacts)}
            </Form.Item>
        </Form>
    )
}
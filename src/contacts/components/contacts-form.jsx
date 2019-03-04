//@flow
import React, { useContext, useRef } from 'react'
import { ContactsContext } from '../state/contacts.context';
import { Form, Input, Button } from 'antd'
import { AddContact } from '../state/contacts.actions';
export const ContactsForm = ({history} : (Object)) => {
    const { dispatch } = useContext(ContactsContext);
    const name : Object = useRef(null);
    const lastName : Object = useRef(null);
    const email : Object = useRef(null);
    const handleSubmit = (e : Object) => {
        e.preventDefault();
        dispatch(AddContact(
            name.current.state.value,
            lastName.current.state.value,
            email.current.state.value
        ));
        history.push('/contacts')
    };
    return (
        <Form className="login-form" onSubmit={handleSubmit}>
            <Form.Item>
                <h4>Add a contact</h4>
            </Form.Item>
            <Form.Item>
                <Input placeholder="Enter your name" ref={name} />
            </Form.Item>
            <Form.Item>
                <Input placeholder="Enter your lastname" ref={lastName}/>
            </Form.Item>
            <Form.Item>
                <Input placeholder="Enter your email" ref={email}/>
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Add contact
                </Button>
            </Form.Item>
        </Form>
    );
}

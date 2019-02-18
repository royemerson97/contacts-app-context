import React from 'react'
import { Form, Input, Button } from 'antd'
import { ContactsConsumer } from './contacts.context';

export const ContactsForm = () => (
    <ContactsConsumer>
        {context =>
            <Form className="login-form" onSubmit={context.actions.handleSubmit}>
                <Form.Item>
                    <h4>Add a contact</h4>
                </Form.Item>
                <Form.Item>
                    <Input placeholder="Enter yoru name" ref={context.refs.name} />
                </Form.Item>
                <Form.Item>
                    <Input placeholder="Enter yoru lastname" ref={context.refs.lastName} />
                </Form.Item>
                <Form.Item>
                    <Input placeholder="Enter yoru email" ref={context.refs.email} />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Add contact
                            </Button>
                </Form.Item>
            </Form>
        }
    </ContactsConsumer>
);
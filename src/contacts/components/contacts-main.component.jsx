import React, { PureComponent } from 'react'
import { ContactsRoutes } from '../contacts.routes';
import { ContactsProvider } from '../context/contacts.context';
import {Row, Col} from 'antd'

class Contacts extends PureComponent {
    constructor() {
        super();
        this.name = React.createRef();
        this.lastName = React.createRef();
        this.email = React.createRef();
    }
    state = {
        contacts: []
    };

    handleContactsFormSubmit = (e) => {
        e.preventDefault();
        const {history} = this.props;
        this.setState({
            contacts: this.state.contacts.concat({
                name: this.name.current.state.value,
                lastName: this.lastName.current.state.value,
                email: this.email.current.state.value,
            })
        });
        history.push("/contacts");
    }
    render() {
        return (
            <ContactsProvider value={{
                data: this.state,
                actions: {
                    handleSubmit: this.handleContactsFormSubmit,
                },
                refs: {
                    name: this.name,
                    lastName: this.lastName,
                    email: this.email
                }
            }}>
                <Row>
                    <Col span={6}>
                        <ContactsRoutes {...this.props} />
                    </Col>
                </Row>
            </ContactsProvider>
        )
    }
}

export default Contacts;
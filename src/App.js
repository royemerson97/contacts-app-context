import React, { Component } from 'react';
import './App.css';
import { AppRoutes } from './main.routes';

class App extends Component {
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
    console.log(this.name);
    console.log(this.lastName);
    console.log(this.email);
    this.setState({
      contacts: this.state.contacts.concat({
        name: this.name.current.state.value,
        lastName: this.lastName.state.value,
        email: this.email.current.state.value,
      })
    });
  }

  render() {
    return (
      <div className="App">
        <AppRoutes />
      </div>
    );
  }
}

export default App;

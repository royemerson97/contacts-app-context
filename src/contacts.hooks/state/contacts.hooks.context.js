import React, { useReducer } from 'react'
import { reducer } from './contacts.hooks.reducer';

const ContactsContext = React.createContext();

const initialState = {
    contacts: []
};

const ContactsContextProvider = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const value = { state, dispatch }
    return (
        <ContactsContext.Provider value={value}>{props.children}</ContactsContext.Provider>
    )
}

export { ContactsContext, ContactsContextProvider}
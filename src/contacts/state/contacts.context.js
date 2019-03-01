//@flow
import React, { useReducer } from 'react'
import { reducer } from './contacts.reducer';
import type {State} from "./state.types";

const ContactsContext : Object = React.createContext();

const initialState : State = {
    contacts: []
};

const ContactsContextProvider = (props : Object) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const value = { state, dispatch };
    return (
        <ContactsContext.Provider value={value}>{props.children}</ContactsContext.Provider>
    )
};

export { ContactsContext, ContactsContextProvider}
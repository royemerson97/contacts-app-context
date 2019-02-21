import React, { useReducer } from 'react'

const ContactsContext = React.createContext();

const initialState = {
    contacts: []
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_CONTACT':
            return { ...state, contacts: [...state.contacts, action.payload] };
        default:
            return state;
    }
}

const ContactsContextProvider = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const value = { state, dispatch }
    return (
        <ContactsContext.Provider value={value}>{props.children}</ContactsContext.Provider>
    )
}

export { ContactsContext, ContactsContextProvider}
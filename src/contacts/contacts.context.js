import React from 'react'

const ContactsContext = React.createContext();
export const ContactsProvider = ContactsContext.Provider;
export const ContactsConsumer= ContactsContext.Consumer;
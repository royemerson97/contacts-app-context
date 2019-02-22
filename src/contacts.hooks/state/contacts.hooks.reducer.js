import { ADD_CONTACT, DELETE_CONTACT, UPDATE_CONTACT } from "../contacts.hooks.actions";

export const reducer = (state, action) => {
    switch (action.type) {
        case ADD_CONTACT:
            const id = state.contacts.length + 1;
            return { ...state, contacts: [...state.contacts, { id, ...action.payload }] };
        case DELETE_CONTACT:
            return {
                ...state, contacts: state.contacts.filter(contact => contact.id !== action.payload)
            }
        case UPDATE_CONTACT:
            return {
                ...state, contacts: state.contacts.map((contact) =>
                    contact.id === action.payload.id ? {...contact, ...action.payload } : contact
                )
            }
        default:
            return state;
    }
}
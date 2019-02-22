import { ADD_CONTACT, DELETE_CONTACT, UPDATE_CONTACT } from "../contacts.hooks.actions";

export const AddContact = (name, lastName, email) => ({
    type: ADD_CONTACT,
    payload: {
        name,
        lastName,
        email
    }
})

export const DeleteContact = (id) => ({
    type: DELETE_CONTACT,
    payload: id
})

export const UpdateContact = (id, name, lastName, email) => ({
    type: UPDATE_CONTACT,
    payload: {
        id,
        name,
        lastName,
        email
    }
})
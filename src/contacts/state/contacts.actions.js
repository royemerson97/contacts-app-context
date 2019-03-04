//@flow
import { ADD_CONTACT, DELETE_CONTACT, UPDATE_CONTACT } from "../contacts.actions.constants";
import type {Action} from "./state.types";

export const AddContact = (name : string, lastName : string, email : string) : Action => ({
    type: ADD_CONTACT,
    payload: {
        name,
        lastName,
        email
    }
});

export const DeleteContact = (id : number) : Action  => ({
    type: DELETE_CONTACT,
    payload: id
});

export const UpdateContact = (id : number, name : string, lastName : string, email : string) : Action => ({
    type: UPDATE_CONTACT,
    payload: {
        id,
        name,
        lastName,
        email
    }
});
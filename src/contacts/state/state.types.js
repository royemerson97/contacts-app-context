import type {Contact} from "../contacts.types";

export type Action = {
    type : string,
    payload : Object
};

export type State = {
    contacts : Array<Contact>
};
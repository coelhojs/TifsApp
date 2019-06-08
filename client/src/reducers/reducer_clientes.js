import * as lodash from "lodash";
import { FETCH_ALL_CLIENTES, FETCH_CLIENTE, CREATE_CLIENTE, EDIT_CLIENTE, DELETE_CLIENTE } from "../actions/types";

export default function (state = {}, action) {
    switch (action.type) {
        case CREATE_CLIENTE:
            return { ...state, [action.payload]: action.payload };
        case EDIT_CLIENTE:
            return { ...state, [action.payload._id]: action.payload };
        case FETCH_ALL_CLIENTES:
            return action.payload;
        case FETCH_CLIENTE:
            return { ...state, [action.payload._id]: action.payload };
        case DELETE_CLIENTE:
            return lodash.omit(state, action.payload._id);
        default:
            return state;
    }
}
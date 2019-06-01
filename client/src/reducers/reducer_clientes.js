import * as lodash from "lodash";
import { FETCH_ALL_CLIENTES, FETCH_CLIENTE, CREATE_CLIENTE, DELETE_CLIENTE } from "../actions/types";

export default function (state = {}, action) {
    switch (action.type) {
        case FETCH_ALL_CLIENTES:
            return action.payload.data;
        case FETCH_CLIENTE:
            return { ...state, [action.payload.data.id]: action.payload.data };
        case CREATE_CLIENTE:
            return { ...state, [action.payload.data.id]: action.payload.data };
        case DELETE_CLIENTE:
            return lodash.omit(state, action.payload.data.id);
        default:
            return state;
    }
}
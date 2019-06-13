import * as lodash from "lodash";
import { FETCH_ALL_SERVICOS, FETCH_SERVICO, CREATE_SERVICO, DELETE_SERVICO, EDIT_SERVICO } from "../actions/types";

export default function (state = {}, action) {
    switch (action.type) {
        case CREATE_SERVICO:
            return { ...state, [action.payload]: action.payload };
        case EDIT_SERVICO:
            return { ...state, [action.payload._id]: action.payload };
        case FETCH_ALL_SERVICOS:
            return action.payload;
        case FETCH_SERVICO:
            return { ...state, [action.payload._id]: action.payload };
        case DELETE_SERVICO:
            return lodash.omit(state, action.payload._id);
        default:
            return state;
    }
}

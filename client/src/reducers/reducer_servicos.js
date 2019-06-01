import * as lodash from "lodash";
import { FETCH_ALL_SERVICOS, FETCH_SERVICO, CREATE_SERVICO, DELETE_SERVICO } from "../actions/types";

export default function (state = {}, action) {
    switch (action.type) {
        case FETCH_ALL_SERVICOS:
            return action.payload.data;
        case FETCH_SERVICO:
            return { ...state, [action.payload.data.id]: action.payload.data };
        case CREATE_SERVICO:
            return { ...state, [action.payload.data.id]: action.payload.data };
        case DELETE_SERVICO:
            return lodash.omit(state, action.payload.data.id);
        default:
            return state;
    }
}

import * as lodash from "lodash";
import { FETCH_ALL_PRODUTOS, FETCH_PRODUTO, CREATE_PRODUTO, DELETE_PRODUTO } from "../actions/types";

export default function (state = {}, action) {
    switch (action.type) {
        case CREATE_PRODUTO:
            return { ...state, [action.payload.data.id]: action.payload.data };
        case FETCH_ALL_PRODUTOS:
            return action.payload.data;
        case FETCH_PRODUTO:
            return { ...state, [action.payload.data.id]: action.payload.data };
        case DELETE_PRODUTO:
            return lodash.omit(state, action.payload.data.id);
        default:
            return state;
    }
}

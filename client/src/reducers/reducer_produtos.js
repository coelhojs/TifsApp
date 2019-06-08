import * as lodash from "lodash";
import { FETCH_ALL_PRODUTOS, FETCH_PRODUTO, CREATE_PRODUTO, EDIT_PRODUTO, DELETE_PRODUTO } from "../actions/types";

export default function (state = {}, action) {
    switch (action.type) {
        case CREATE_PRODUTO:
            return { ...state, [action.payload]: action.payload };
        case EDIT_PRODUTO:
            return { ...state, [action.payload._id]: action.payload };
        case FETCH_ALL_PRODUTOS:
            return action.payload;
        case FETCH_PRODUTO:
            return { ...state, [action.payload._id]: action.payload };
        case DELETE_PRODUTO:
            return lodash.omit(state, action.payload._id);
        default:
            return state;
    }
}

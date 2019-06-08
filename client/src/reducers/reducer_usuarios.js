import * as lodash from "lodash";
import { FETCH_ALL_USUARIOS, FETCH_USUARIO, CREATE_USUARIO, DELETE_USUARIO, EDIT_USUARIO } from "../actions/types";

export default function (state = {}, action) {
    switch (action.type) {
        case CREATE_USUARIO:
            return { ...state, [action.payload]: action.payload };
        case EDIT_USUARIO:
            return { ...state, [action.payload._id]: action.payload };
        case FETCH_ALL_USUARIOS:
            return action.payload;
        case FETCH_USUARIO:
            return { ...state, [action.payload.token]: action.payload };
        case DELETE_USUARIO:
            return lodash.omit(state, action.payload._id);
        default:
            return state;
    }
}
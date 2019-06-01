import * as lodash from "lodash";
import { FETCH_ALL_CABELEIREIROS, FETCH_CABELEIREIRO, CREATE_CABELEIREIRO, DELETE_CABELEIREIRO, EDIT_CABELEIREIRO } from "../actions/types";

export default function (state = {}, action) {
    switch (action.type) {
        case CREATE_CABELEIREIRO:
            return { ...state, [action.payload.data]: action.payload.data };
        case EDIT_CABELEIREIRO:
            return { ...state, [action.payload.id]: action.payload };
        case FETCH_ALL_CABELEIREIROS:
            return action.payload.data;
        case FETCH_CABELEIREIRO:
            return { ...state, [action.payload.id]: action.payload };
        case DELETE_CABELEIREIRO:
            return lodash.omit(state, action.payload.data.id);
        default:
            return state;
    }
}
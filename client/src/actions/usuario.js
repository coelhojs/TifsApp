import history from '../history';
import { api, responseValidation } from "./index";
import { CREATE_USUARIO, DELETE_USUARIO, EDIT_USUARIO, FETCH_USUARIO } from './types';


export const createUsuario = formValues => async (dispatch, getState) => {

    const response = await api.post('/usuarios/cadastro', { ...formValues });
    console.log(response);
    dispatch({ type: CREATE_USUARIO, payload: response.data.dados });
    if (!response.data.dados.erro) {
        history.push('/');
    } else {
        responseValidation(response);
    }
};

export const fetchUsuario = id => async dispatch => {
    const response = await api.get(`/Usuarios/${id}`);
    console.log(response);
    dispatch({ type: FETCH_USUARIO, payload: response.data.dados });
};

export const editUsuario = (id, formValues) => async dispatch => {
    formValues.token = sessionStorage.getItem('token');
    const response = await api.put(`/Usuarios/${id}`, formValues);
    console.log(response);
    dispatch({ type: EDIT_USUARIO, payload: response.data.dados });
};

export const deleteUsuario = id => async dispatch => {
    const response = await api.delete(`/Usuarios/${id}`);
    dispatch({ type: DELETE_USUARIO, payload: response.data.dados });
};

export const loginUsuario = formValues => async dispatch => {
    const response = await api.post(`/usuarios/login`, formValues);
    dispatch({ type: FETCH_USUARIO, payload: response.data.dados });
    sessionStorage.setItem('token', response.data.dados.token);
    //console.log(sessionStorage.getItem('token'));
    history.push('/Home');
};

export const logout = () => async dispatch => {
    sessionStorage.setItem('token', '');
    history.push('/');
}
import history from '../history';
import { api, responseValidation } from "./index";
import {
    CREATE_USUARIO, EDIT_USUARIO, FETCH_USUARIO, FETCH_ALL_USUARIOS, DELETE_USUARIO
} from './types';

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

export const fetchAllUsuarios = () => async dispatch => {
    const response = await api.get('/Usuarios');
    console.log(response);
    dispatch({ type: FETCH_ALL_USUARIOS, payload: response.data.dados });
};

export const fetchUsuario = id => async dispatch => {
    const response = await api.get(`/Usuarios/${id}`);
    console.log(response);
    dispatch({ type: FETCH_USUARIO, payload: response.data.dados });
};

export const loginUsuario = formValues => async dispatch => {
    const response = await api.post(`/usuarios/login`, formValues);
    dispatch({ type: FETCH_USUARIO, payload: response.data.dados });
    sessionStorage.setItem('token', response.data.dados.token);
    console.log(sessionStorage.getItem('token'));
};

export const editUsuario = (id, formValues) => async dispatch => {
    const response = await api.put(`/Usuarios/${id}`, formValues);
    dispatch({ type: EDIT_USUARIO, payload: response.data });
};

export const deleteUsuario = id => async dispatch => {
    const response = await api.delete(`/Usuarios/${id}`);
    dispatch({ type: DELETE_USUARIO, payload: response.data });
};
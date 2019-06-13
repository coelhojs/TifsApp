import history from '../history';
import { api } from "./index";
import { CREATE_CLIENTE, DELETE_CLIENTE, EDIT_CLIENTE, FETCH_ALL_CLIENTES, FETCH_CLIENTE } from './types';

export const createCliente = formValues => async (dispatch, getState) => {
    formValues.token = sessionStorage.getItem('token');
    const response = await api.post('/Clientes', { ...formValues });
    // console.log(response);
    dispatch({ type: CREATE_CLIENTE, payload: response.data.dados });
    history.push('/Home');
};

export const fetchCliente = id => async dispatch => {
    const response = await api.get(`/Clientes/${id}`);
    // console.log(response);
    dispatch({ type: FETCH_CLIENTE, payload: response.data.dados });
};

export const editCliente = (id, formValues) => async dispatch => {
    formValues.token = sessionStorage.getItem('token');
    const response = await api.put(`/Clientes/${id}`, formValues);
    // console.log(response);
    dispatch({ type: EDIT_CLIENTE, payload: response.data.dados });
};

export const deleteCliente = id => async dispatch => {
    const response = await api.delete(`/Clientes/${id}`);
    // console.log(response);
    dispatch({ type: DELETE_CLIENTE, payload: response.data.dados });
    
};

export const fetchAllClientes = () => async dispatch => {
    
    const response = await api.get('/Clientes');
    // console.log(response);
    dispatch({ type: FETCH_ALL_CLIENTES, payload: response.data.dados });
};
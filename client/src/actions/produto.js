import { api, responseValidation } from "./index";
import history from '../history';
import { CREATE_PRODUTO, DELETE_PRODUTO, EDIT_PRODUTO, FETCH_ALL_PRODUTOS, FETCH_PRODUTO } from './types';

export const createProduto = formValues => async (dispatch, getState) => {
    formValues.token = sessionStorage.getItem('token');
    const response = await api.post('/Produtos', { ...formValues });
    // console.log(response);
    dispatch({ type: CREATE_PRODUTO, payload: response.data.dados });
    history.push('/Produtos');
};

export const fetchProduto = id => async dispatch => {
    const response = await api.get(`/Produtos/${id}`);
    // console.log(response);
    dispatch({ type: FETCH_PRODUTO, payload: response.data.dados });
};

export const editProduto = (id, formValues) => async dispatch => {
    formValues.token = sessionStorage.getItem('token');
    const response = await api.put(`/Produtos/${id}`, formValues);
    // console.log(response);
    dispatch({ type: EDIT_PRODUTO, payload: response.data });
};

export const deleteProdutos = id => async dispatch => {
    const response = await api.delete(`/Produtos/${id}`);
    // console.log(response);
    dispatch({ type: DELETE_PRODUTO, payload: id });
    history.push('/Produtos');
};

export const fetchAllProdutos = () => async dispatch => {

    const response = await api.get('/Produtos');
    // console.log(response);
    dispatch({ type: FETCH_ALL_PRODUTOS, payload: response.data.dados });
};

// export const editProduto = id => async dispatch => {
    //     const response = await api.put('/Produtos/', { ...formValues });
    //     dispatch({ type: FETCH_PRODUTO, payload: response });
    // };
import history from '../history';
import { api } from "./index";
import { CREATE_SERVICO, DELETE_SERVICO, EDIT_SERVICO, FETCH_ALL_SERVICOS, FETCH_SERVICO, FETCH_SERVICO_NAME } from './types';

export const createServico = formValues => async (dispatch, getState) => {
    const response = await api.post('/Servicos', { ...formValues });
    dispatch({ type: CREATE_SERVICO, payload: response });
    console.log(response);
    history.push('/Home');
};

export const fetchServicos = () => async dispatch => {
    const response = await api.get('/Servicos');
    dispatch({ type: FETCH_ALL_SERVICOS, payload: response });
};
export const fetchServico = id => async dispatch => {
    const response = await api.get(`/Servicos/${id}`);
    dispatch({ type: FETCH_SERVICO, payload: response });
};

export const editServico = (id, formValues) => async dispatch => {
    
    const response = await api.put(`/Servicos/${id}`, formValues);
    console.log(response);
    dispatch({ type: EDIT_SERVICO, payload: response.data });
};

// export const editServico = id => async dispatch => {
//     const response = await api.put('/Servicos/', { ...formValues });
//     dispatch({ type: FETCH_SERVICO, payload: response });
// };

export const getServicoName = id => async dispatch => {
    
    const response = await api.get(`/Servicos/${id}`);
    dispatch({ type: FETCH_SERVICO_NAME, payload: response.data });
};

export const deleteServicos = id => async dispatch => {
    const response = await api.delete(`/Servicos/${id}`);
    dispatch({ type: DELETE_SERVICO, payload: id });
    console.log(response);
    history.push('/Servicos');
};

// console.log("Testes endpoint /Servicos");
// console.log("getAll:");
// let getAllTest = api.get("/Servicos").then(response => response.data).then(console.log);
// console.log("postTeste:");
// let postTeste = api.post("/Servicos", {
//     "data": "2019-05-26T00:00:00.000Z",
//     "cliente": "Testando Lucio 2 inclusao segundo teste",
//     "nome": "teste",
//     "__v": 0
// }).then(console.log);

// console.log("getAll:");
// getAllTest = api.get("/Servicos").then(response => response.data).then(console.log);

// console.log("putTeste:");
// let putTeste = api.put("/Servicos", {
//     "": postTeste,
//     "cliente": "Testando Lucio 2 Alteracao",
//     "nome": "teste",
//     "__v": 0
// }).then(console.log);

// console.log("getIdTeste");
// let getIdTeste = api.get("/Servicos/" + postTeste).then(response => response.data).then(console.log);

// console.log("delTeste");
// let delTeste = api.delete("/Servicos/" + postTeste).then(response => response.data).then(console.log);
import { api, responseValidation } from "./index";
import history from '../history';
import { CREATE_PRODUTO, DELETE_PRODUTO, EDIT_PRODUTO, FETCH_ALL_PRODUTOS, FETCH_PRODUTO, FETCH_PRODUTO_NAME } from './types';

export const createProduto = formValues => async (dispatch, getState) => {
    formValues.token = sessionStorage.getItem('token');
    const response = await api.post('/Produtos', { ...formValues });
    console.log(response);
    dispatch({ type: CREATE_PRODUTO, payload: response.data.dados });
    history.push('/Produtos');
};

export const fetchAllProdutos = () => async dispatch => {
    const response = await api.get('/Produtos');
    console.log(response);
    dispatch({ type: FETCH_ALL_PRODUTOS, payload: response.data.dados });
};

export const fetchProduto = id => async dispatch => {
    const response = await api.get(`/Produtos/${id}`);
    console.log(response);
    dispatch({ type: FETCH_PRODUTO, payload: response.data.dados });
};

export const editProduto = (id, formValues) => async dispatch => {

    const response = await api.put(`/Produtos/${id}`, formValues);
    console.log(response);
    dispatch({ type: EDIT_PRODUTO, payload: response.data });
};

// export const editProduto = id => async dispatch => {
//     const response = await api.put('/Produtos/', { ...formValues });
//     dispatch({ type: FETCH_PRODUTO, payload: response });
// };

export const getProdutoName = id => async dispatch => {

    const response = await api.get(`/Produtos/${id}`);
    dispatch({ type: FETCH_PRODUTO_NAME, payload: response.data });
};

export const deleteProdutos = id => async dispatch => {
    const response = await api.delete(`/Produtos/${id}`);
    dispatch({ type: DELETE_PRODUTO, payload: id });
    console.log(response);

    history.push('/Produtos');
};

/*console.log("Testes endpoint /Produtos");
console.log("getAll:");
let getAllTest = api.get("/Produtos").then(response => response.data).then(console.log);
console.log("postTeste:");
let postTeste = api.post("/Produtos", {"categoria": "Testando Inclusao 3",
                                        "marca": "Teste",
                                        "linha": "bureal",
                                        "descricao": "testando",
                                        "conteudo": "10ml",
                                        "medida": "10",
                                        "__v": 0}).then(console.log);

console.log("putTeste:");
let putTeste = api.put("/Produtos", {"": postTeste.,
                                    "categoria": "Testando Inclusao 3",
                                    "marca": "Teste",
                                    "linha": "bureal",
                                    "descricao": "testando",
                                    "conteudo": "10ml",
                                    "medida": "10",
                                    "__v": 0}).then(console.log);

console.log("getAll:");
getAllTest = api.get("/Produtos").then(response => response.data).then(console.log);

console.log("getIdTeste");
let getIdTeste = api.get("/Produtos/"+postTeste.).then(response => response.data).then(console.log);

console.log("delTeste");
let delTeste = api.delete("/Produtos/"+postTeste.).then(response => response.data).then(console.log);*/
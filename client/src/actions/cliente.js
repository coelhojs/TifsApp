import { api } from "./index";
import history from '../history';
import { CREATE_CLIENTE, DELETE_CLIENTE, EDIT_CLIENTE, FETCH_ALL_CLIENTES, FETCH_CLIENTE, FETCH_CLIENTE_NAME } from './types';

export const createCliente = formValues => async (dispatch, getState) => {
    const response = await api.post('/Clientes', { ...formValues });
    dispatch({ type: CREATE_CLIENTE, payload: response });
    history.push('/Home');
};

export const fetchClientes = () => async dispatch => {
    const response = await api.get('/Clientes');
    dispatch({ type: FETCH_ALL_CLIENTES, payload: response });
};

export const fetchCliente = id => async dispatch => {
    const response = await api.get(`/Clientes/${id}`);
    console.log(response);
    dispatch({ type: FETCH_CLIENTE, payload: response });
};

export const editCliente = (id, formValues) => async dispatch => {
    const response = await api.put(`/Clientes/${id}`, formValues);
    console.log(response.data);
    dispatch({ type: EDIT_CLIENTE, payload: response.data });
};

export const getClienteName = id => async dispatch => {
    const response = await api.get(`/Clientes/${id}`);
    dispatch({ type: FETCH_CLIENTE_NAME, payload: response.data });
};

export const deleteCliente = id => async dispatch => {
    const response = await api.delete(`/Clientes/${id}`);
    dispatch({ type: DELETE_CLIENTE, payload: response.data });
};

/*console.log("Testes endpoint /Cliente");
console.log("getAll:"); 
let getAllTest = api.get("/Clientes").then(response => response.data).then(console.log);
console.log("postTeste:"); 
let postTeste = api.post("/Clientes", {"nome": "Morgana",
                                        "cpf": "95559158033",
                                        "telefone": "812850298",
                                        "nascimento": "1985-10-13T00:36:36.002Z",
                                        "alergias": false,
                                        "sexo": "feminino",
                                        "__v": 0}).then(console.log);

console.log("putTeste:"); 
let putTeste = api.put("/Clientes", {"id": postTeste.id,
                                        "nome": "Morgana",
                                        "cpf": "95559158033",
                                        "telefone": "812850298",
                                        "nascimento": "1985-10-13T00:36:36.002Z",
                                        "alergias": false,
                                        "sexo": "feminino",
                                        "__v": 0}).then(console.log);  

console.log("getAll:"); 
getAllTest = api.get("/Clientes").then(response => response.data).then(console.log);   

console.log("getIdTeste");
let getIdTeste = api.get("/Clientes/"+postTeste.id).then(response => response.data).then(console.log);  

console.log("delTeste");
let delTeste = api.delete("/Clientes/"+postTeste.id).then(response => response.data).then(console.log);*/
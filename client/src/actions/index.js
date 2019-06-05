import { create } from "apisauce";
import { SIGN_IN, SIGN_OUT } from './types';

export const api = create({
    // //Base json-db:
    //baseURL: "http://localhost:3004"
    //
    //Banco de dados local TIS:
    baseURL: "http://localhost:3001",
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
        // "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
        // 'Access-Control-Allow-Headers': true,
        // 'Access-Control-Allow-Origin': 'Content-Type',
        "Accept": "application/json",
        "Content-Type": "application/json",
    }

    //Banco de dados online TIS:
    //baseURL: "134.209.243.214:3001"
});

export const responseValidation = response => {
    switch (response.status) {
        case 500:
            alert("Houve um erro ao processar a sua requisição");
            console.log(response.data.dados.mensagem);
            break;
        case 200:
            alert(response.data.dados._id);
        default:
            break;
    }

    return response.ok;
}

export const signIn = userId => {
    return {
        type: SIGN_IN,
        payload: userId
    };
};

export const signOut = () => {
    return {
        type: SIGN_OUT
    };
};
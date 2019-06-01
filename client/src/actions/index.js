import { create } from "apisauce";

export const api = create({
    // //Base json-db:
    //baseURL: "http://localhost:3004"
    //
    //Banco de dados local TIS:
    baseURL: "https://localhost:3001",
    headers: {
        // 'access-control-allow-headers': true,
        // 'Access-Control-Allow-Origin': 'Content-Type'
        "Accept":"application/json",
        "Content-Type":"application/json",
    }

    //Banco de dados online TIS:
    //baseURL: "134.209.243.214:3001"
});
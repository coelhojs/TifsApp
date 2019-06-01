import React from "react";
//import moment from "moment";

const ItemCliente = ({ clientes }) => {
    //const key = (clientes.id).slice(-4);
    //const key = clientes.id;
    const nome = clientes.nome;
    const telefone = clientes.telefone;
    //const cpf = clientes.CPF;
    //const dataNasc = moment(clientes.DataNascimento).format('DD/MM/YYYY');
    const email = clientes.email;

    return (
        <div className="list-group-item list-group-item-action flex-column align-items-start">
            <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">{nome}</h5>
                {/* <small>{dataNasc}</small> */}
            </div>
            <p className="mb-1">{email}</p>
            <p className="mb-1">{telefone}</p>
        </div>

    );
};

export default ItemCliente;
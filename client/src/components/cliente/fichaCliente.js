import moment from "moment";
import React from 'react';

const FichaCliente = ({ clientes }) => {
    const nome = clientes.nome;
    const telefone = clientes.telefone;
    const cpf = clientes.CPF;
    const dataNasc = moment(clientes.DataNascimento).format('DD/MM/YYYY');

    return (
        <div>
            <h2>{nome}</h2>
            <span>{telefone}</span>
            <span>{cpf}</span>
            <span>{dataNasc}</span>
        </div>
    );
};

export default FichaCliente;
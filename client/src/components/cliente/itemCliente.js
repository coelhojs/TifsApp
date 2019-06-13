import React from "react";

const ItemCliente = ({ clientes }) => {
    //const key = clientes.id;
    const nome = clientes.nome;
    const telefone = clientes.telefone;
    //const cpf = clientes.CPF;
    //const dataNasc = moment(clientes.DataNascimento).format('DD/MM/YYYY');

    return (
        <div key={clientes._id} className="list-item">
            <h5 className="mb-1">Nome: {nome}</h5>
            <h5 className="mb-1">Telefone: {telefone}</h5>
        </div>
    );
};

export default ItemCliente;
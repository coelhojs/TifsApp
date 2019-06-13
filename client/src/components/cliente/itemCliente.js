import React from "react";
import moment from 'moment';

const ItemCliente = ({ clientes }) => {
    //const key = clientes.id;
    const nome = clientes.nome;
    const telefone = clientes.telefone;
    const cpf = clientes.CPF;
    const dataNasc = moment(clientes.DataNascimento).format('DD/MM/YYYY');

    return (
        <div className="col-md-3 text-center">
            <div key={clientes._id} className="card card-cliente">
                <div><i className="fas fa-user-circle fa-7x"></i></div>
                <h5 className="mb-1">{nome}</h5>
                <br />
                <div className="text-left">
                    <p className="mb-1">Telefone: {telefone}</p>
                    <p className="mb-1">Data de nascimento: {dataNasc}</p>
                    <p className="mb-1">CPF: {cpf}</p>
                </div>
            </div>
            <br />
        </div >
    );
};

export default ItemCliente;
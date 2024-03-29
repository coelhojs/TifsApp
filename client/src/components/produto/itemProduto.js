import React from "react";

const ItemProduto = ({ produtos }) => {
    const key = produtos.id;
    const categoria = produtos.categoria;
    const marca = produtos.marca;
    const linha = produtos.linha;
    const descricao = produtos.descricao;
    const conteudo = produtos.conteudo;
    const medida = produtos.medida;

    return (
        <tr key={key}>
            <td>{categoria}</td>
            <td>{marca}</td>
            <td>{linha}</td>
            <td>{descricao}</td>
            <td>{conteudo}</td>
            <td>{medida}</td>
            {/* <td><span><a href=""><img src="/img/logo/edit.png" alt="Editar produto" />Editar produto</a></span></td> */}
            <td className="text-center">
                <i className="fas fa-trash-alt"></i>
            </td>
        </tr>
    );
};

export default ItemProduto;
import React from 'react';

const servicoOptions = ({ produtos }) => {
    return (
        <option>
            {produtos.nome}
        </option>

    )
};

export default servicoOptions;
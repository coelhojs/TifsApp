import React from 'react';

const Divider = () => {
    const style = {
        marginLeft: '8rem',
        marginRight: '8rem',
        border: '0',
        borderTop: '0.5px solid snow'
    }

    return (
        <hr style={style} />
    );
};

export default Divider;
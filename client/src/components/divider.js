import React from 'react';

const Divider = () => {
    const style = {
        marginLeft: '8rem',
        marginRight: '8rem',
        border: '0',
        borderTop: '3px solid lightgray'
    }

    return (
        <hr style={style} />
    );
};

export default Divider;
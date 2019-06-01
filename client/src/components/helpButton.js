import React from 'react';

const style = {
    position: 'fixed',
    width: '36px',
    height: '30px',
    left: '20px',
    top: '20px'
}

const HelpButton = () => {
    return (
        <div style={style}>
            <img src="/img/icon/help.svg" alt="Ajuda" />
        </div>
    );
};

export default HelpButton;
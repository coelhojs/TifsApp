import React from 'react';
import { Link } from "react-router-dom";

const style = {
    position: 'fixed',
    width: '36px',
    height: '30px',
    left: '20px',
    top: '20px',
    color: 'snow'
}

const HomeButton = () => {
    return (
        <div style={style}>
            <Link to="/Home">
                <i class="fas fa-home fa-2x"></i>
            </Link>
        </div>
    );
};

export default HomeButton;
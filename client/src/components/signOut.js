import React from 'react';
import { Link } from "react-router-dom";

const style = {
    position: 'fixed',
    width: '36px',
    height: '30px',
    top: '20px',
    right: '20px',
    color: 'snow'
}

const HomeButton = () => {
    return (
        <div style={style}>
            <Link to="/">
                <i className="fas fa-sign-out-alt fa-2x"></i>
            </Link>
        </div>
    );
};

export default HomeButton;
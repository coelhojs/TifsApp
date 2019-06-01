import React from 'react';
import Divider from '../components/divider';
import { Link } from "react-router-dom";
import HelpButton from '../components/helpButton';

const Header = () => {
    return (
        <header>
            {/* <HelpButton /> */}
            <div className="logo">
                <Link to="/Home">
                    <img src="/img/logo-tifs.png" alt="Logo do salão Tifs" />
                </Link>
            </div>
            <Divider />
        </header>
    );
};

export default Header;
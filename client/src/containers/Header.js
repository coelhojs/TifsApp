import React from 'react';
import { Link } from "react-router-dom";
import Divider from '../components/divider';
import HomeButton from '../components/homeButton';
import SignOut from '../components/signOut';

const Header = () => {
    return (
        <header>
            <HomeButton />
            <div className="logo">
                <Link to="/Home">
                    <img src="/img/logo-tifs.png" alt="Logo do salão Tifs" />
                </Link>
            </div>
            <SignOut />
            <Divider />
        </header>
    );
};

export default Header;
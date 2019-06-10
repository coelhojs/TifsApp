import React from 'react';
import { Link, withRouter } from "react-router-dom";
import Divider from '../components/divider';
import HelpButton from '../components/helpButton';


const Header = (props) => {
    const { location } = props;
    if (location.pathname.match("/")) {
        return null;
    }
    return (
        <header>
            <HelpButton />
            <div className="logo">
                <Link to="/Home">
                    <img src="/img/logo-tifs.png" alt="Logo do salão Tifs" />
                </Link>
            </div>
            <Divider />
        </header>
    );
};

const HeaderWithRouter = withRouter(Header);

export default HeaderWithRouter;
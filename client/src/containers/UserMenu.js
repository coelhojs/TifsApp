import React from 'react';
import { pushRotate as Menu } from "react-burger-menu";
import { Link, withRouter } from "react-router-dom";

const UserMenu = props => {
    const { location } = props;
    if (location.pathname.match('/Inicio')) {
        return null;
    }
    return (
        <Menu right pageWrapId={"page-wrap"} >
            <div>
                <img src="/img/icones/essential/svg/user-3.svg" alt="" width="70px" />
            </div>
            <Link to="/Home">
                Menu Principal
                </Link>
            <hr />
            <Link to="/Editar/5cdca3cf4846a141f0c72d19" className="menu-item">
                <img src="/img/icones/essential/svg/edit.svg" alt="" width="20px" />
                <span>Editar perfil</span>
            </Link>
            <Link to="/Ajuda" className="menu-item">
                <img src="/img/icones/essential/svg/help.svg" alt="" width="20px" />
                <span>Ajuda</span>
            </Link>
            <Link to="/Termos" className="menu-item">
                <img src="/img/icones/essential/svg/notepad-2.svg" alt="" width="20px" />
                <span>Termos</span>
            </Link>
            <hr />
            <Link to="/Inicio" className="menu-item">
                <img src="/img/icones/essential/svg/exit-2.svg" alt="" width="20px" />
                <span>Sair</span>
            </Link>
        </Menu>
    )
}

const UserMenuWithRouter = withRouter(UserMenu);

export default UserMenuWithRouter;
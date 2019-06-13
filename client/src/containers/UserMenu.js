import React, { Component } from 'react';
import { pushRotate as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";

let history = require("history").createBrowserHistory;

class UserMenu extends Component {

    logout() {
        let tokenVALUE = sessionStorage.getItem('token');
        console.log("Token antes do logout: " + tokenVALUE);
        sessionStorage.setItem('token', '');
        console.log("Token depois do logout: " + tokenVALUE);
    }

    // const { location } = props;
    // if (location.pathname.match('/')) {
    //     return null;
    // }

    render() {
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
                <Link to="/" className="menu-item" onClick={this.logout()}>
                    <img src="/img/icones/essential/svg/exit-2.svg" alt="" width="20px" />
                    <span>Sair</span>
                </Link>
            </Menu>
        )
    }
}
export default UserMenu;

    // const UserMenuWithRouter = withRouter(UserMenu);

    // export default UserMenuWithRouter;
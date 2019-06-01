import React, { Component } from 'react';
import { connect } from 'react-redux';
import { pushRotate as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import { fetchCabeleireiro } from '../actions/cabeleireiro';

class UserMenu extends Component {
    componentDidMount() {
        // let id = "5cdca3cf4846a141f0c72d19";
        // this.props.fetchCabeleireiro(id);
    }

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
                <Link to="/" className="menu-item">
                    <img src="/img/icones/essential/svg/exit-2.svg" alt="" width="20px" />
                    <span>Sair</span>
                </Link>
            </Menu>
        )
    }
}

export default connect(
    null,
    { fetchCabeleireiro }
)(UserMenu);

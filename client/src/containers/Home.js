import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
    render() {
        return (
            <main className="home">
                <div className="d-flex justify-content-around">
                    <Link to="/Servico" className="btn-lg m-2 btn-dark col-3">
                        <img src="./img/icones/essential/svg/add-1.svg" className="home__btn" alt="" />
                        Novo Servico</Link>
                </div>
                <div className="d-flex justify-content-around">
                    <Link to="/Clientes" className="btn-lg m-2 btn-dark col-3">
                        <img src="./img/icones/essential/svg/users-1.svg" className="home__btn" alt="" />
                        Meus Clientes
                    </Link>
                </div>
                <div className="d-flex justify-content-around">
                    <Link to="/Historico" className="btn-lg m-2 btn-dark col-3">
                        <img src="./img/icones/essential/svg/hourglass-1.svg" className="home__btn" alt="" />
                        Histórico de serviços
                    </Link>
                </div>
                {/* <div className="d-flex justify-content-around">
                    <Link to="/Relatorios" className="btn-lg m-2 btn-dark col-3">
                        <img src="./img/icones/essential/svg/notebook-1.svg" className="home__btn" alt="" />
                        Relatórios
                    </Link>
                </div> */}
                <div className="d-flex justify-content-around">
                    <Link to="/Produtos" className="btn-lg m-2 btn-dark col-3">
                        <img src="./img/icones/essential/svg/produtos.svg" className="home__btn" alt="" />
                        Produtos
                    </Link>
                </div>
            </main>
        );
    }
}

export default Home;
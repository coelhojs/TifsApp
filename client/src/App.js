import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Cadastro from "./containers/Cadastro";
import Clientes from "./containers/Clientes";
import Editar from "./containers/EditarCadastro";
import Footer from "./containers/Footer";
import Historico from "./containers/Historico";
import Header from "./containers/Header";
import Home from "./containers/Home";
import Landing from "./containers/Landing";
import Login from "./containers/Login";
import Produtos from "./containers/Produtos";
//import Relatorios from "./containers/Relatorios";
import Servico from "./containers/Servico";
import VisualizarHistorico from "./components/visualizarHistorico";
import { withRouter } from 'react-router'

class App extends Component {

    render() {
        return (
            <div id="page-wrap">
                <Header />
                <Switch>
                    <Route exact path="/" component={Landing} />
                    <Route exact path="/Home" component={Home} />
                    <Route path="/Clientes" component={Clientes} />
                    <Route path="/Historico" component={Historico} />
                    <Route exact path="/Historico/:id" component={VisualizarHistorico} />
                    <Route path="/Produtos" component={Produtos} />
                    <Route path="/Servico" component={Servico} />
                    <Route path="/Editar/:id" component={Editar} />
                    <Route path="/Cadastro" component={Cadastro} />
                    <Route path="/Login" component={Login} />
                    {/* <Route path="/Relatorios" component={Relatorios} /> */}
                </Switch>
                <Footer />
            </div >
        );
    }
}

export default App;
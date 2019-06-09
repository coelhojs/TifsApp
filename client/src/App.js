import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import VisualizarHistorico from "./components/visualizarHistorico";
import Clientes from "./containers/Clientes";
import Header from "./containers/Header";
import Historico from "./containers/Historico";
import Home from "./containers/Home";
import Landing from "./containers/Landing";
import Produtos from "./containers/Produtos";
//import Relatorios from "./containers/Relatorios";
import Servico from "./containers/Servico";
import HeaderWithRouter from "./containers/Header";

class App extends Component {

    render() {
        return (
            <div id="page-wrap">
                <HeaderWithRouter />
                <Switch>
                    <Route exact path="/" component={Landing} />
                    <Route exact path="/Home" component={Home} />
                    <Route path="/Clientes" component={Clientes} />
                    <Route path="/Historico" component={Historico} />
                    <Route exact path="/Historico/:id" component={VisualizarHistorico} />
                    <Route path="/Produtos" component={Produtos} />
                    <Route path="/Servico" component={Servico} />
                    {/* <Route path="/Editar/:id" component={Editar} /> */}
                    {/* <Route path="/Cadastro" component={Cadastro} />
                    <Route path="/Login" component={Login} /> */}
                    {/* <Route path="/Relatorios" component={Relatorios} /> */}
                </Switch>
                {/* <Footer /> */}
            </div >
        );
    }
}

export default App;
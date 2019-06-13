import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import VisualizarHistorico from "./components/visualizarHistorico";
import Clientes from "./containers/Clientes";
//import Header from "./containers/Header";
import Historico from "./containers/Historico";
import Home from "./containers/Home";
import Landing from "./containers/Landing";
import Produtos from "./containers/Produtos";
//import Relatorios from "./containers/Relatorios";
import Servico from "./containers/Servico";

class App extends Component {

    render() {
        return (
            <Switch>
                <Route exact path="/" component={Landing} />
                <Route path="/Home" component={Home} />
                <Route path="/Clientes" component={Clientes} />
                <Route path="/Historico" component={Historico} />
                <Route path="/Historico/:id" component={VisualizarHistorico} />
                <Route path="/Produtos" component={Produtos} />
                <Route path="/Servico" component={Servico} />
                {/* <Route path="/Editar/:id" component={Editar} /> */}
                {/* <Route path="/Cadastro" component={Cadastro} />
                    <Route path="/Login" component={Login} /> */}
                {/* <Route path="/Relatorios" component={Relatorios} /> */}
            </Switch>
        );
    }
}

export default App;
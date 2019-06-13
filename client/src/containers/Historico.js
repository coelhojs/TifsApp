import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAllServicos } from '../actions/servico';
import ListaServicosRecentes from "../components/servico/listaServicosRecentes";
import Header from "./Header";
// import SearchInput from "../components/searchInput";

class Historico extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="page container" id="page-wrap">
                    <div className="row">
                        <div className="page-title text-center">
                            <h4>Histórico de serviços</h4>
                        </div>
                        {/* <div className="text-center">
                    <div className="offset-md-5">
                    <SearchInput />
                    </div>
                    <div className="btn-group btn-group-sm">
                    <button type="button" className="btn btn-secondary">Recentes</button>
                    <button type="button" className="btn btn-secondary">Todos</button>
                    </div>
                </div> */}
                        <br />
                        <div className="col-12">
                            <ListaServicosRecentes />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { servicos: state.servicos };
}

export default connect(
    mapStateToProps,
    { fetchAllServicos }
)(Historico);


/* <Carousel slides={this.renderServicos()} /> */
/* https://www.npmjs.com/package/react-spring-3d-carousel */
/* https://github.com/suhailsulu/react-carousel-3d */

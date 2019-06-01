import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchServicos } from '../actions/servico';
import ListaServicosRecentes from "../components/listaServicosRecentes";
import SearchInput from "../components/searchInput";

class Historico extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="page-title text-center"><h1>Histórico de serviços</h1></div>
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
                <ListaServicosRecentes />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { servicos: state.servicos };
}

export default connect(
    mapStateToProps,
    { fetchServicos }
)(Historico);


{/* <Carousel slides={this.renderServicos()} /> */ }
{/* https://www.npmjs.com/package/react-spring-3d-carousel */ }
{/* https://github.com/suhailsulu/react-carousel-3d */ }

import React, { Component } from 'react';
import Auth from './Auth';

class Landing extends Component {
    render() {
        return (
            <div className="container-fluid landing" >
                <div className="row no-gutters">
                    <div className="landing__title col-md-6 text-center">
                        <img src="/img/logo-tifs.png" alt="" className="landing__logo" />
                        <h1>Bem-vindo(a)!</h1>
                        <br />
                        <p>Controle seu histórico de serviços de forma prática e segura.
                            <br />
                            Mantenha um cadastro de seus clientes e produtos utilizados.</p>
                    </div>
                    <div className="landing__forms col-md-6 text-center">
                        <Auth onSubmit={this.onSubmit} />
                    </div>
                </div>
            </div>

        );
    }
}

export default Landing;
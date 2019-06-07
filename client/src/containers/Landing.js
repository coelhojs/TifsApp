import React, { Component } from 'react';
import LoginForm from './Login';
import { Link } from "react-router-dom";

class Landing extends Component {
    render() {
        return (
            <div className="container">
                <div className="rounded">
                    <div className="row">
                        <div className="offset-md-3 col-md-3 text-right">
                            <h2>Bem-vindo(a)!</h2>
                        </div>
                    </div>

                    <LoginForm onSubmit={this.onSubmit} />

                    <div className="offset-md-3 col-md-6 text-center">
                        <span>Ainda não possui uma conta? </span>
                        <button className="btn btn-link">
                            <Link to='/Cadastro'>
                                <span>Cadastre-se</span>
                            </Link>
                        </button>
                    </div>
                </div>
            </div>

        );
    }
}

export default Landing;
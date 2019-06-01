import React, { Component } from 'react';
import LoginForm from './Login';
import { Link } from "react-router-dom";

class Landing extends Component {
    render() {
        return (
            <div className="container">
                <div className="rounded">
                    <div className="row">
                        <div className="offset-md-4 col-md">
                            <h2>Bem-vindo(a)!</h2>
                        </div>
                        <div className="col-md-5 text-left">
                            <button className="btn btn-link">
                                <Link to='/Cadastro'>
                                    <h5>Cadastre-se</h5>
                                </Link>
                            </button>
                        </div>
                    </div>

                    <LoginForm onSubmit={this.onSubmit} />
                    {/* <Link to="/Cadastro" className="btn m-2 btn-dark col-2">Cadastrar</Link>
                    <Link to="/Login" className="btn m-2 btn-dark col-2">Login</Link> */}
                </div>
            </div>

        );
    }
}

export default Landing;
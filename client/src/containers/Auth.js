import React, { Component } from 'react';
import CadastroForm from "../components/usuario/cadastroForm";
import LoginForm from "../components/usuario/loginForm";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { isToggleOn: true };
        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }));
    }

    render() {
        if (this.state.isToggleOn) {
            return (
                <div>
                    <LoginForm onSubmit={this.onSubmit} />
                    <div className="text-center">
                        <span>Ainda não possui uma conta? </span>
                        <button className="btn btn-link" onClick={this.handleClick}>
                            <span id="linkCadastro">Cadastre-se</span>
                        </button>
                    </div>
                </div>
            )
        } else {
            return (
                    <CadastroForm onSubmit={this.onSubmit}/>                
            )
        }
    }
}

export default Login;
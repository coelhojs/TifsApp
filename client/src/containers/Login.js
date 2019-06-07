import React, { Component } from 'react';
import LoginForm from "../components/usuario/loginForm";


class Login extends Component {
    render() {
        return (
            <div>
                <LoginForm onSubmit={this.onSubmit} />
            </div>
        );
    }
}

export default Login;
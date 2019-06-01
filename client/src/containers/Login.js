import React, { Component } from 'react';
import LoginForm from "../forms/loginForm";


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
import React, { Component } from 'react';
import Auth from './Auth';

class Landing extends Component {
    render() {
        return (
            <div className="container-fluid">
                {/* <div className="row">
                        <div className="offset-md-3 col-md-6 text-center">
                        </div>
                    </div> */}
                <br />
                <div className="row no-gutters">
                    <div className="col-md-6">
                        <h2>Bem-vindo(a)!</h2>
                    </div>
                    <div className="authForms col-md-6 text-center">
                        <Auth onSubmit={this.onSubmit} />
                    </div>
                </div>
            </div>

        );
    }
}

export default Landing;
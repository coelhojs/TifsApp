import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { createProduto } from '../actions/produto';
import InputField from "../components/inputField";
import '../style/general.scss';

let history = require("history").createBrowserHistory;

class ProdutoForm extends Component {
    onSubmit(props) {
        this.props.createProduto(props, () => {
            history.push('/Produtos');
        });
    }
    render() {
        const { handleSubmit, pristine, reset, submitting } = this.props;

        return (
            <form className="container formMobileProd" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <div className="text-center"><h1>Cadastro de Produto</h1></div>
                <hr />
<label htmlFor="">Categoria</label>
                <Field name="categoria" component="input" className="form-control"   />
                <label htmlFor="">Marca</label>
                <Field name="marca" component="input" className="form-control"  type="text"
                    placeholder="Ex.: Loreal" 
                />
                <label htmlFor="">Linha</label>
                <Field name="linha" label="Linha" component="input" className="form-control"  type="text"
                    placeholder="Ex.: Kids" 
                />
                <label htmlFor="">Descrição</label>
                <Field name="descricao" label="Descrição" component="input" className="form-control"  type="text"  />
                <label htmlFor="">Conteúdo</label>
                <Field name="conteudo" label="Conteúdo" component="input" className="form-control "  type="number"
                    placeholder="500"  
                />
                {/* <Field name="medida" component="select">
                            <option value="ml">ml</option>
                            <option value="l">l</option>
                            <option value="mg">mg</option>
                            <option value="g">g</option>
                            <option value="kg">kg</option>
                        </Field> */}
                {/* <Field name="medida" label="Medida" component="input" className="form-control"   /> */}
                <div className="button-group d-flex justify-content-around">
                    <button type="button" className="btn btn-success"  disabled={pristine || submitting}
                        onSubmit={reset}>
                        Cadastrar
                        </button>
                    <button type="button" className="btn btn-danger" disabled={pristine || submitting} onClick={reset}>
                        Cancelar
                        </button>
                </div>
                <br />
                {/* <p className="text-center">Dúvidas ao cadastrar o produto? <a href="">Clique aqui</a></p> */}
            </form >
        );
    }
}

export default reduxForm({
    form: 'produtoForm'
})(
    connect(null, { createProduto })(ProdutoForm)
);
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { createProduto } from '../../actions/produto';
import renderField from '../helpers/renderField';

class ProdutoForm extends Component {
    onSubmit(props) {
        console.log('onsubmit teste: ' + props);
        this.props.createProduto(props);
    }
    render() {
        const { handleSubmit, pristine, reset, submitting } = this.props;

        return (
            <form className="container formMobileProd" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <div className="text-center"><h1>Novo Produto</h1></div>
                <hr />
                <label>Categoria</label>
                <Field name="categoria" component={renderField} className="form-control" />
                <label>Marca</label>
                <Field name="marca" component={renderField} className="form-control" type="text"
                    placeholder="Ex.: Loreal"
                />
                <label>Linha</label>
                <Field name="linha" label="Linha" component={renderField} className="form-control" type="text"
                    placeholder="Ex.: Kids"
                />
                <label>Descrição</label>
                <Field name="descricao" label="Descrição" component={renderField} className="form-control" type="text" />
                <label>Conteúdo</label>
                <Field name="conteudo" label="Conteúdo" component={renderField} className="form-control " type="number"
                    placeholder="500"
                />
                {/* <Field name="medida" component="select">
                            <option value="ml">ml</option>
                            <option value="l">l</option>
                            <option value="mg">mg</option>
                            <option value="g">g</option>
                            <option value="kg">kg</option>
                        </Field> */}
                {/* <Field name="medida" label="Medida" component={renderField} className="form-control"   /> */}
                <div className="button-group d-flex justify-content-around">
                    <button type="button" className="btn btn-danger" disabled={pristine || submitting}
                        onClick={reset}>
                        Cancelar
                        </button>
                    <button type="submit" className="btn btn-success" disabled={pristine || submitting}>
                        Cadastrar
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
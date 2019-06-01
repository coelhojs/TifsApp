// import * as lodash from "lodash";
// import React, { Component } from 'react'
// import { connect } from 'react-redux';
// import { formValueSelector, reduxForm } from 'redux-form';
// import { fetchClientes } from '../actions/cliente';
// import { fetchServicos } from '../actions/servico';
// import ServicoFormPage1 from './servicoFormPage1'
// import ServicoFormPage2 from './servicoFormPage2'

// let history = require("history").createBrowserHistory;

// function getDate() {
//     var currentTime = new Date(),
//         month = '' + (currentTime.getMonth() + 1),
//         day = '' + currentTime.getDate(),
//         year = currentTime.getFullYear();

//     if (month.length < 2) month = '0' + month;
//     if (day.length < 2) day = '0' + day;

//     return [year, month, day].join('-');
// }

// const defaultValues = {
//     data: getDate()
// }

// class ServicoForm extends Component {
//     constructor(props) {
//         super(props)
//         this.nextPage = this.nextPage.bind(this)
//         this.previousPage = this.previousPage.bind(this)
//         this.state = {
//             page: 1
//         }
//     }
//     nextPage() {
//         this.setState({ page: this.state.page + 1 })
//     }

//     previousPage() {
//         this.setState({ page: this.state.page - 1 })
//     }

//     componentWillMount() {
//         this.props.fetchClientes();
//         this.props.fetchServicos();
//     }
//     renderClientes() {
//         return lodash.map(this.props.clientes, clientes => {
//             return <option key={clientes.id} value={clientes.nome}>{clientes.nome}</option>
//         });
//     }

//     renderServicos() {
//         let id = 0;
//         return lodash.map(this.props.servicos, servicos => {
//             return <option key={id++} value={servicos.nome}>{servicos.nome}</option>;
//         })
//     }

//     renderMateriais() {
//         let id = 0;
//         let materiais = [];
//         return lodash.map(this.props.servicos, servicos => {
//             materiais.push(servicos.produtos)
//             return <option key={id++} value={servicos.nome}>{servicos.nome}</option>;
//         })
//     }

//     onSubmit(props) {
//         this.props.createServico(props, () => {
//             history.push('/');
//         });
//     }

//     // render() {
//     //     const { onSubmit } = this.props
//     //     const { page } = this.state
//     //     return (
//     //         <div>
//     //             {page === 1 && (
//     //                 <ServicoFormPage1 onSubmit={this.nextPage}
//     //                 />
//     //             )}
//     //             {page === 2 && (
//     //                 <ServicoFormPage2
//     //                     previousPage={this.previousPage}
//     //                     onSubmit={this.nextPage}
//     //                 />
//     //             )}
//     //         </div>
//     //     )
//     // }

//     render() {
//         const { handleSubmit } = this.props;
//         const { page } = this.state
//         return (
//             <div>
//                 {page === 1 && (
//                     <ServicoFormPage1
//                         onSubmit={this.nextPage}
//                         clientes={this.renderClientes()}
//                     />
//                 )}
//                 {page === 2 && (
//                     <ServicoFormPage2
//                         // produtos={this.renderProdutos()}
//                         servicos={this.renderServicos()}
//                         previousPage={this.previousPage}
//                         onSubmit={handleSubmit}
//                     />
//                 )}
//             </div>
//         );
//     }
// }

// const mapStateToProps = state => {
//     const selector = formValueSelector('servicoForm')
//     return {
//         initialValues: defaultValues,
//         clientes: state.clientes,
//         servicos: state.servicos,
//         produtos: state.produtos,
//         selectedServico: selector(state, 'servico')
//     };
// }

// // export default connect(
// //     mapStateToProps,
// //     state => ({
// //         initialValues: defaultValues
// //     }),
// //     { fetchClientes, fetchServicos }
// // )(ServicoForm)

// ServicoForm = reduxForm({
//   form: 'servicoForm'
// })(ServicoForm)

// ServicoForm = connect(
//   state => ({
//     initialValues: defaultValues
//   }),
//   { fetchClientes, fetchServicos, mapStateToProps }
// )(ServicoForm)

// export default ServicoForm

import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import ReducerUsuarios from "./reducer_usuarios";
import ReducerClientes from "./reducer_clientes";
import ReducerProdutos from "./reducer_produtos";
import ReducerServicos from "./reducer_servicos";

const rootReducer = combineReducers({
    clientes: ReducerClientes,
    usuarios: ReducerUsuarios,
    produtos: ReducerProdutos,
    servicos: ReducerServicos,
    form: formReducer
});

export default rootReducer;

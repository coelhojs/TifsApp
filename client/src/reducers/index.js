import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import ReducerCabeleireiros from "./reducer_cabeleireiros";
import ReducerClientes from "./reducer_clientes";
import ReducerProdutos from "./reducer_produtos";
import ReducerServicos from "./reducer_servicos";

const rootReducer = combineReducers({
    clientes: ReducerClientes,
    cabeleireiros: ReducerCabeleireiros,
    produtos: ReducerProdutos,
    servicos: ReducerServicos,
    form: formReducer
});

export default rootReducer;

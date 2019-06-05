const muv = require('mongoose-unique-validator');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NOME_MODELO = 'Serviço';

const schema = new Schema({
    nome: { type: String, required: true },
    data: { type: Date, default: Date.now },
    anotacoes: { type: String },
    cliente: { type: String, required: true },
    produtos: [{ type: Schema.Types.ObjectId, Ref: "Produto" }],
    token: { type: Schema.Types.ObjectId, required: true },

}, { Strict: true });

schema.index({ nome: 1, data: 1, anotacoes: 1, cliente: 1, produtos: 1, token: 1 }, { unique: true });

schema.plugin(muv);

module.exports = mongoose.model(NOME_MODELO, schema);
const muv = require('mongoose-unique-validator');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NOME_MODELO = 'Cabeleireiro';

const schema = new Schema({
    nome: { type: String, required: true },
    telefone: { type: String, unique: true },
    cnpj: { type: String, unique: true },
    dataNascimento: { type: Date },
    token: { type: Schema.Types.ObjectId, required: true }

}, { strict: true });

schema.plugin(muv);

module.exports = mongoose.model(NOME_MODELO, schema);


/*
 * Este modelo representa o usuário do sistema.
 * Quando ele for criado e adicionado ao banco, 
 * será gerado e retornado o seu _id, que servirá
 * como token de acesso.
 */

const muv = require('mongoose-unique-validator');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NOME_MODELO = 'Usuario';

const schema = new Schema({
    email: { type: String, required: true, unique: true },
    senha: { type: String, required: true },

}, { strict: true });

schema.plugin(muv);

module.exports = mongoose.model(NOME_MODELO, schema);
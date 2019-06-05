const express = require('express');
const Usuario = require('./usuario.modelo');
const fake = require('../fake');
const validador = require('../validações');
const router = express.Router();

// Metodo provisorio para listar usuarios
router.get('/', (req, res, next) => {
    Usuario.find(req.body)
        .exec()
        .then(result => { res.status(200).json(result); })
        .catch(err => { res.status(500).json(err); });
});

router.post('/login', (req, res, next) => {
    let email = req.body.email;
    let senha = req.body.senha;
    Usuario.findOne({ email: email, senha: senha })
        .exec()
        .then(result => {
            if (result) {
                res.status(200).json({ token: result._id });
            } else {
                res.status(200).json({ msg: 'Usuario nao encontrado ou senha invalida!' });
            }
        }).catch(err => {
            res.status(500).json(err);
        });
});

router.post('/cadastro', (req, res, next) => {

});

module.exports = router;
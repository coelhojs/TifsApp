const express = require('express');
const Usuario = require('./usuario.modelo');
const Cabeleireiro = require('../cabeleireiro/cabeleireiro.modelo');
const validador = require('../validações');
const router = express.Router();

const Resposta = require('../resposta');

// Metodo provisorio para listar usuarios
router.get('/', (req, res, next) => {
    Usuario.find(req.body)
        .exec()
        .then(result => { res.status(200).json(new Resposta(false, 200, '', result)); })
        .catch(err => { res.status(500).json(new Resposta(true, 500, err.message, err)); });
});

router.post('/login', (req, res, next) => {
    let email = req.body.email;
    let senha = req.body.senha;

    // >>> Validacao opcional aqui <<<
    // let validacao = validar(email, senha);

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
    let email = req.body.email;
    let senha = req.body.senha;

    delete req.body.email;
    delete req.body.senha;

    // >>> Validacao opcional aqui <<<
    // let validacao = validar(email, senha);

    let user = new Usuario({ email: email, senha: senha });
    user.save()
        .then(resultUser => {
            // Criacao do cabeleireiro
            let cab = new Cabeleireiro(req.body);
            cab.token = resultUser._id;
            cab.save()
                .then(result => { res.status(200).json(new Resposta(false, 200, '', result)); })
                .catch(err => { res.status(500).json(new Resposta(true, 500, err.message, err)); });
        }).catch(err => { res.status(500).json(err) });
});

module.exports = router;
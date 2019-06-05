const express = require('express');
const Serviço = require('./serviço.modelo');
const router = express.Router();

const Resposta = require('../resposta');

router.get('/', (req, res, next) => {
    Serviço.find(req.body)
        .exec()
        .then(result => { res.status(200).json(new Resposta(false, 200, '', result)); })
        .catch(err => { res.status(500).json(new Resposta(true, 500, err.message, err)); });
});

router.post('/', (req, res, next) => {
    let c = new Serviço(req.body);
    c.save()
        .then(result => { res.status(200).json(new Resposta(false, 200, '', result)); })
        .catch(err => { res.status(500).json(new Resposta(true, 500, err.message, err)); });
});

router.put('/', (req, res, next) => {
    Serviço.updateOne({ _id: req.body._id }, req.body)
        .exec()
        .then(result => { res.status(200).json(new Resposta(false, 200, '', result)); })
        .catch(err => { res.status(500).json(new Resposta(true, 500, err.message, err)); });
});

router.delete('/', (req, res, next) => {
    Serviço.deleteOne({ _id: req.body._id })
        .exec()
        .then(result => { res.status(200).json(new Resposta(false, 200, '', result)); })
        .catch(err => { res.status(500).json(new Resposta(true, 500, err.message, err)); });
});

router.get('/tipo_servico', (req, res, next) => {
    let dados = [
        'Escova',
        'Corte',
        'Coloração',
        'Selagem',
        'Mechas',
    ];
    res.status(200).json(new Resposta(false, 200, '', dados));
});


module.exports = router;
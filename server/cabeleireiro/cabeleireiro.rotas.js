const express = require('express');
const Cabeleireiro = require('./cabeleireiro.modelo');
const fake = require('../fake');
const validador = require('../validações');
const router = express.Router();

const Resposta = require('../resposta');

router.get('/', (req, res, next) => {
    Cabeleireiro.find(req.body)
        .exec()
        .then(result => { res.status(200).json(new Resposta(false, 200, '', result)); })
        .catch(err => { res.status(500).json(new Resposta(true, 500, err.message, err)); });
});

router.get('/:id', (req, res, next) => {
    Cabeleireiro.findOne({ _id: req.params.id })
        .exec()
        .then(result => { res.status(200).json(new Resposta(false, 200, '', result)); })
        .catch(err => { res.status(500).json(new Resposta(true, 500, err.message, err)); });
});

router.get('/criar/:num', (req, res, next) => {
    let num = req.params.num;
    for (let i = 0; i < num; i++) {
        let c = new Cabeleireiro(fake.Cabeleireiro());
        c.save();
    }
    res.status(200).json(new Resposta(false, 200, 'Operação realizada com sucesso', null));
});

router.post('/', (req, res, next) => {
    let c = new Cabeleireiro(req.body);
    c.save()
        .then(result => { res.status(200).json(new Resposta(false, 200, '', result)); })
        .catch(err => { res.status(500).json(new Resposta(true, 500, err.message, err)); });
});

router.put('/', (req, res, next) => {
    let c = req.body;
    Cabeleireiro.updateOne({ _id: req.body._id }, req.body)
        .exec()
        .then(result => { res.status(200).json(new Resposta(false, 200, '', result)); })
        .catch(err => { res.status(500).json(new Resposta(true, 500, err.message, err)); });
});

router.delete('/', (req, res, next) => {
    Cabeleireiro.deleteOne({ _id: req.body._id })
        .exec()
        .then(result => { res.status(200).json(new Resposta(false, 200, '', result)); })
        .catch(err => { res.status(500).json(new Resposta(true, 500, err.message, err)); });
});


module.exports = router;
const express = require('express');
const Usuario = require('./usuario.modelo');
const fake = require('../fake');
const validador = require('../validações');
const router = express.Router();

router.get('/', (req, res, next) => {
    Usuario.find(req.body)
        .exec()
        .then(result => { res.status(200).json(result); })
        .catch(err => { res.status(500).json(err); });
});

module.exports = router;
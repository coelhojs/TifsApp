const usuario = require('./usuario/usuario.modelo');
const bodyparser = require('body-parser');
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();
app.use(express.static('./public'));

// Middlewares:
app.use(cors());
app.use(morgan('dev'));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

// Autenticador:
app.use((req, res, next) => {
    if (req.method != 'GET' && req.path != '/usuarios') {
        if (!req.token) {
            let msg = 'Token não recebido.';
            console.log(msg + ' O corpo da requisição é: ');
            console.log(req.body);
            res.status(500).json({ msg: msg });
        } else {
            usuario.findOne({ _id: req.body.token })
                .exec()
                .then(result => { console.log('Autenticado como ' + result.email); next() })
                .catch(err => { res.status(500).json({ msg: 'Erro ao autenticar: Token invalido!' }) });
        }
    } else {
        next();
    }
});

// Rotas
app.get('/', (req, res, next) => res.status(200).redirect('/index.html'));
app.use('/usuarios', require('./usuario/usuario.rotas'));
app.use('/clientes', require('./cliente/cliente.rotas'));
app.use('/produtos', require('./produto/produto.rotas'));
app.use('/servicos', require('./serviço/serviço.rotas'));
app.use('/cabeleireiros', require('./cabeleireiro/cabeleireiro.rotas'));

// Tratamento de rotas inválidas:
app.use((req, res, next) => res.status(404).redirect('/notfound.html'));

module.exports = app;
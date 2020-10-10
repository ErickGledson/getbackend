const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const helmet = require('helmet');

const app = express();

const userController = require('./controller/user');
const projectController = require('./controller/project');

app.use(helmet());
app.use(bodyParser.json());
app.disable('x-powered-by');

app.get('/', (request, response) => {
    response.json({ message: 'ok' });
    response.end();
});

app.post('/api/user', userController.create);
app.post('/api/user/login', userController.login);

app.get('/api/project', projectController.list);
app.get('/api/project/:id', projectController.view);
app.post('/api/project', projectController.create);
app.put('/api/project/:id', projectController.update);
app.delete('/api/project/:id', projectController.delete);

mongoose
    .connect('mongodb://db:27017/getnet', {
        useNewUrlParser: true
    })
    .then(result => {
        console.log('MongoDB Conectado');
    })
    .catch(error => {
        console.log(error);
    });

app.listen(9000, () => console.log('Server ativo na porta 9000'));
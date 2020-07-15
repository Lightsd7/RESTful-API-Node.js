const express = require('express');
// let routesIndex = require('./routes/index');
// let routesUsers = require('./routes/users');
const consign = require('consign');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');

let app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(expressValidator());

consign().include('routes').include('utils').into(app);

// app.use(routesIndex);
// app.use('/users', routesUsers);


app.listen(4000, '127.0.0.1', () => {
    console.log('servidor rodando!');
});
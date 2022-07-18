const express = require('express');
const router = require('./router');
const routere = require('./routere');
const app = express();

let port = 3000;

app.use('/', router)//chamada das rotas get
app.use('/', routere)//chamada das rotas post

app.listen(port, () => console.log(`escultando a porta ${port}`));




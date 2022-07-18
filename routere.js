let express = require('express');
let routere = express.Router();

//chamada que não exista oui nao está tratada
routere.post('/post/test_post', (req, res) => {
 
    res.end("Testa no postman!")

});

module.exports = routere;
let express = require('express');
let router = express.Router();


// chamado de rota normal
router.get('/', (req, res) => {
    res.send('<br><center><h1> sobre essa página</h1><p>ela é uma resposta</p></center>')

});

//chamada por parametro//
router.get('/cliente/:id/', (req, res) => {
    res.send(`<br><center><h1>Cliente é: ${req.params.id}</h1></center>`)
});

//chamada json
router.get('/json', (req, res) => {
    res.status(200).json({
            dados: [
            {id: 10, name: 'Dannilo' },
            {id: 20, name: 'Eloah'} 
            ]
        })

});

//chamada regex
router.get('/dan[0-9]dan', (req, res) => {
   res.send("<br><center><h1>Expressão regular</h1></center>")
});


//chamada que não exista oui nao está tratada
router.get('*', (req, res) => {
 
    res.status(404).end("Erro 404! Nao Encontrado!")

});

module.exports = router;
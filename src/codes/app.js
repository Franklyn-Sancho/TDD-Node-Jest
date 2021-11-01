const index = require('./index')
const express = require('express')
const app = express()
const port = 3000


//criando um servidor somples com duas rotas

app.use(express.json())
app.get('/', (req, res) => {
    res.json({message: "rrrrodando"}) //rota raíz que faz apenas o get da mensagem "rodando"
})

//rota que aplica o desconto da função "aplicar desconto" presente no arquivo index
app.get('/aplicarDesconto/:valor/:desconto', (req, res) => {
    const valor = parseInt(req.params.valor)
    const desconto = parseInt(req.params.desconto)
    res.json({ valorDescontado: index.aplicarDesconto(valor, desconto)})
})

if (require.main === module) {
    app.listen(port)
    console.log('Api funcionando')
}

module.exports = app
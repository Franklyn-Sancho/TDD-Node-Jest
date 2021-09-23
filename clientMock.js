const { query } = require('express')
const SequelizeMock = require('sequelize-mock')
const dbMock = new SequelizeMock()

const ClientMock = dbMock.define('cliente', {
    id: 1,
    nome: 'Frank',
    idade: '30',
    uf: 'RJ'
})

ClientMock.$queryInterface.$useHandler((query, queryOptions, done) => {
    if(query == 'findAll') {
        const limit = queryOptions[0].litmit ?? 10;
        const result = []
        for (let x = 0; x < limit; x++)
            result.push(ClientMock.build({
                id: x,
                nome: 'cliente' + 1,
                idade: x,
                uf: "RJ" 
            }))
            return result
    }
})

module.exports = ClientMock
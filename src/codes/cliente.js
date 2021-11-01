const Sequelize = require('sequelize')
const database = require('./db')

/**
 * Constante cliente que define os dados de um banco de dados. 
 * Usamos o sequelize para versionar o nosso banco de dados 
 * o nome do tabela é cliente e recebe os seguintes dados;
 */
const Cliente = database.define('cliente', {
    id: {
        type: Sequelize.INTEGER, //Id inteiro
        autoIncrement: true, //o valor se auto incrementa pelo sistema, não precisamos criar.
        allowNull: false,
        primaryKey: true //é uma chave primária
    },
    nome: {
        type: Sequelize.STRING, //O nome do cliente recebe uma string
        allowNull: false
    },
    idade: {
        type: Sequelize.INTEGER //A idade será um valor inteiro
    },
    uf: {
        type: Sequelize.STRING(2) //A unidade federativa receberá uma string
    }, 
        Timestamps: false // não retornará o tempo
    
})

module.exports = Cliente
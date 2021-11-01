const ibgeService = require('../codes/ibgeService')

/**
 * O nock é responsável por fazer o mock das requisições HTTP.
 */
const nock = require('nock')
nock('https://servicodados.ibge.gov.br') //O nock será feito nessa página
    .persist()
    .get('/api/v1/localidades/estados') //fazemos um get na rota estados dentro da api do IBGE
    .reply(200, [{
        id: 53,
        sigla: 'DF',
        nome: 'Distrito Federal',
        regiao: {id: 5, sigla: 'CO', nome: 'Centro-Oeste'}
    }])

test('getUFs', async () => {
    const result = await ibgeService.getUFs()
    expect(Array.isArray(result)).toBeTruthy()
})
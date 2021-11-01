const mock = require('../codes/mock')

jest.mock('fs')

//Se o resultado for verdadeiro, dentro do esperado, então o arquivo existe e o resultado é verdadeiro
test('Encontrar o arquivo', () => {
    const result = mock.findTestTxt()
    expect(result).toBeTruthy()
})
const mock = require('./mock')

jest.mock('fs')

test('Encontrar o arquivo', () => {
    const result = mock.findTestTxt()
    expect(result).toBeTruthy()
})
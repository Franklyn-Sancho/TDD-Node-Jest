const { expect } = require('@jest/globals')
const index = require('../codes/index')

/**
 * Os testes funcionam da seguinte forma: Criamos uma descrição do teste desejado, no exemplo abaixo: 
 * ""aplicar desconto. Criamos uma constante com o nome "result" e instanciamos a função da classe 
 * index, chamando os argumentos desejados. Então dizemos que o esperado é o resultado igual a 5
 */
test('aplicar desconto', () => {
    const result = index.aplicarDesconto(10, 5)
    expect(result).toEqual(5)

})

test('Aplicar desconto grande', () => {
    const result = index.aplicarDesconto(5,10)
    expect(result).toEqual(0)
})
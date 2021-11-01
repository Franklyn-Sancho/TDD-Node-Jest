const fs = require('fs')

/**
 * A função findTestTxt vai procurar o arquivo 'text.txt' na pasta raiz. Se for encontrado, o retorno do teste
 * será positivo. O teste está no arquivo "mock.test.js" lá na pasta tests
 */
function findTestTxt() {
    const files = fs.readdirSync('./')
    return files.some(f => f === 'test.txt')
}

module.exports = {findTestTxt}
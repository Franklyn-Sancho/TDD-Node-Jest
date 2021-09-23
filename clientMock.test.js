const repository = require('./clientRepository')

jest.mock('./cliente', () => {
    return require('./clientMock')
})

test('findAll', async () => {
    const result = await repository.findAll(10)
    console.log(result)
    expect(result.length).toEqual(10)
})
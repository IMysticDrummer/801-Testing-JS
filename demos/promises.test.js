import {failedRequest, successfulRequest} from './promises.js'
describe('callback style', () => {
    it('should fail the request failedRequest', (done) => {
        failedRequest().catch(e => {
            expect(e.message).toMatch(/failed/i)
            done()
        })
    })
    it.todo('should have status 200 the request successfulRequest')
})

describe('promise style', () => {
    it('should have status 200 the request successfulRequest', () => {
        // SUPER UTIL PARA CODIGO ASINCRONO
        expect.assertions(1)
        return successfulRequest().then(response => {
            expect(response.status).toEqual(200)
        })
    })
    it.todo('should fail the request failedRequest')
})

describe('.rejects/.resolves style', () => {
    it('should fail the request failedRequest', () => {
        expect.assertions(1)
        return expect(failedRequest()).rejects.toThrow(/request failed/i)
    })
    it.todo('should have status 200 the request successfulRequest')
})

describe('async & await style', () => {
    it('should have status 200 the request successfulRequest', async () => {
        expect.assertions(1)
        try {
            const response = await successfulRequest();
            expect(response.status).toBeGreaterThanOrEqual(200)
        } catch(e){ 

        }
    })
    it.todo('should fail the request failedRequest')
})
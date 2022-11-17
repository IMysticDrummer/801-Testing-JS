const request = require('supertest');
const app = require('../../app.js')

describe('Testing users endpoints', () => {
    describe('GET /users', () => {
        it('should return 2 users', async () => {
            const response = await request(app).get('/users')

            expect(response.statusCode).toBe(200)
            expect(response.body).toHaveProperty('users')
            expect(response.body.users).toHaveLength(2)
        })
    })

    describe('GET /users:id', () => {
        it('should return a user', async () => {
            const response = await request(app).get('/users/2')
    
            expect(response.body).toHaveProperty('user')
        })
        it('should return a user={id: 1} for id 1', async () => {
            const response = await request(app).get('/users/1')
    
            expect(response.body.user).toMatchObject({id: 1})

        })
    })
})
import Users from './Users.js'

describe('User class', () => {
    describe('Without mocking', () => {
        it('should return 10 users', async() => {
            expect.assertions(1)
            try {
                const userList = await Users.all()
                expect(userList).toHaveLength(10)
            } catch(e){
                console.log(e)
            }
        })
        it('should have users[0].username === Bret', async () => {
            expect.assertions(1)
            try {
                const userList = await Users.all()
                expect(userList[0]).toMatchObject({username: 'Bret'})
            } catch(e){
                console.log(e)
            }
        })
    })
})
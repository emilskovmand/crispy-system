const request = require('supertest')
const app = require("../server.js")

let randomNum1 = Math.random()
let randomNum2 = Math.random()

describe('Addition Test', () => {
    it('should add numbers correctly', async () => {
        const response = await request(app)
            .post("/index/operations/addition")
            .send({
                num1: randomNum1,
                num2: randomNum2,
            })

        expect(response.statusCode).toEqual(200)
        expect(response.body).toHaveProperty('result')
        expect(response.body.result).toEqual(randomNum1 + randomNum2)
    })
})

const session = require('supertest-session')
const app = require('../index')

const chai = require('chai')
const chaiHttp = require('chai-http')
const expect = chai.expect
chai.use(chaiHttp)
const url = "http://localhost:3001"
const agent = session(app)

describe("GET /iecho",()=>{
    it("should get 200", ()=> agent.get("/iecho?text=hello").expect(200));
    it("should get 400", ()=> agent.get("/iecho?text=").expect(400));
    it("should be palindrome", ()=> {
        return agent.get("/iecho?text=ana").expect(200)
        .then(res =>{
            expect(res.body.palindrome).to.equal(true)
        })
    });

})
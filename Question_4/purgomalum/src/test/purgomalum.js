'use stricts'

let chai = require('chai');
let chaiHttp = require('chai-http');
const expect = require('chai').expect;

chai.use(chaiHttp);
const url= 'https://www.purgomalum.com/';


describe('PurgoMalum Automation API: ',()=>{

    context('Boundaries Testing', () => {
        it('should insert a country 1', (done) => {
            chai.request(url)
                .get('/service/json')
                .query({text: "this is some test input"})
                .end( function(err,res){
                    console.log(res.body)
                    expect(res).to.have.status(200);
                    done();
                });
        });

    });
});
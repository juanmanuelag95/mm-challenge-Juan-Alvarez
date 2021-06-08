'use stricts'

let chai = require('chai');
let chaiHttp = require('chai-http');
const expect = require('chai').expect;
const assert = require('chai').assert;

chai.use(chaiHttp);
const url= 'https://www.purgomalum.com/';


describe('PurgoMalum Automation API: ',()=>{

    context('Boundaries Testing', () => {
        it('Empty text value', (done) => {
            chai.request(url)
                .get('/service/json')
                .query({text: ""})
                .end( function(err,res){
                    expect(res).to.have.status(200);
                    expect(res.body).to.have.property('error').to.be.equal("No Input");
                    done();
                });
        });

        it('Add parameter, bundaries more than 10 words', (done) => {
            chai.request(url)
                .get('/service/json')
                .query({text: "this is uno test input",
                        add: "ab, ab, ab, ab, ab, ab, ab, ab, ab, ab, ab, ab",
                        fill_text: "test "})
                .end( function(err,res){
                    expect(res).to.have.status(200);
                    expect(res.body).to.have.property('error').to.be.equal("User Black List Exceeds Limit of 10 Words.");
                    done();
                });
        });

        it('Add parameter, bundaries more than 200 chars', (done) => {
            chai.request(url)
                .get('/service/json')
                .query({text: "this is uno test input",
                        add: "Lorem ipsum dolor sit amet consectetur adipiscing elitNam velit erat blandit quis metus a eleifend commodo ligula sdsdSed vestibulum elementum neque eget variu Pelle ntesque sollicitudin sit morbi abcdefghi",
                        fill_text: "test "})
                .end( function(err,res){
                    expect(res).to.have.status(200);
                    expect(res.body).to.have.property('error').to.be.equal("Invalid Characters in User Black List");
                    done();
                });
        });

        it('Not profanity content on the text', (done) => {
            chai.request(url)
                .get('/service/json')
                .query({text: "this is some test input",
                        fill_text: "test "})
                .end( function(err,res){
                    expect(res).to.have.status(200);
                    expect(res.body).to.have.property('result').to.be.equal("this is some test input");
                    done();
                });
        });
        
        it('Invalid replacement char', (done) => {
            chai.request(url)
                .get('/service/json')
                .query({text: "this is some test input",
                        add: "test",
                        fill_char: ";"})
                .end( function(err,res){
                    expect(res).to.have.status(200);
                    expect(res.body).to.have.property('error').to.be.equal("Invalid User Replacement Characters");
                    done();
                });
        }); 

        it('Not present replacement text', (done) => {
            chai.request(url)
                .get('/service/json')
                .query({text: "this is some test input",
                        add: "test",
                        fill_text: ""})
                .end( function(err,res){
                    expect(res).to.have.status(200);
                    expect(res.body).to.have.property('result').to.be.equal("this is some **** input");
                    done();
                });
        }); 

        it('Does not contains profanity', (done) => {
            chai.request(url)
                .get('/service/containsprofanity')
                .query({text: "this is some test input"})
                .end( function(err,res){
                    expect(res).to.have.status(200);
                    assert.equal(res.text, 'false')
                    done();
                });
        }); 

    });

    context('Expected Paths', () => {
        
        it('Does contain profanity', (done) => {
            chai.request(url)
                .get('/service/containsprofanity')
                .query({text: "ass"})
                .end( function(err,res){
                    expect(res).to.have.status(200);
                    assert.equal(res.text, 'true')
                    done();
                });
        });
        
        it('Replacement text', (done) => {
            chai.request(url)
                .get('/service/json')
                .query({text: "this is some test input",
                        add: "test",
                        fill_text: "lorem"})
                .end( function(err,res){
                    expect(res).to.have.status(200);
                    expect(res.body).to.have.property('result').to.be.equal("this is some lorem input");
                    done();
                });
        });
        
        it('Replacement text multiple words', (done) => {
            chai.request(url)
                .get('/service/json')
                .query({text: "this is some test input",
                        add: "test,input",
                        fill_text: "lorem"})
                .end( function(err,res){
                    expect(res).to.have.status(200);
                    expect(res.body).to.have.property('result').to.be.equal("this is some lorem  lorem");
                    done();
                });
        });
        
        it('Replacement text case insesitive', (done) => {
            chai.request(url)
                .get('/service/json')
                .query({text: "this is some TEST input",
                        add: "test",
                        fill_text: "lorem"})
                .end( function(err,res){
                    expect(res).to.have.status(200);
                    expect(res.body).to.have.property('result').to.be.equal("this is some lorem input");
                    done();
                });
        });

        it('Replacement text special chars', (done) => {
            chai.request(url)
                .get('/service/json')
                .query({text: "this is some test input",
                        add: "test",
                        fill_text: "_a_"})
                .end( function(err,res){
                    expect(res).to.have.status(200);
                    expect(res.body).to.have.property('result').to.be.equal("this is some _a_ input");
                    done();
                });
        });

        it('Replacement text 20 chars lenght', (done) => {
            chai.request(url)
                .get('/service/json')
                .query({text: "this is some test input",
                        add: "test",
                        fill_text: "Lorem ipsum viverraa"})
                .end( function(err,res){
                    expect(res).to.have.status(200);
                    expect(res.body).to.have.property('result').to.be.equal("this is some Lorem ipsum viverraa input");
                    done();
                });
        });

        it('Replacement char', (done) => {
            chai.request(url)
                .get('/service/json')
                .query({text: "this is some test input",
                        add: "test",
                        fill_char: "_"})
                .end( function(err,res){
                    expect(res).to.have.status(200);
                    expect(res.body).to.have.property('result').to.be.equal("this is some ____ input");
                    done();
                });
        });

        it('Replacement char multiple words', (done) => {
            chai.request(url)
                .get('/service/json')
                .query({text: "this is some test input",
                        add: "some , test",
                        fill_char: "_"})
                .end( function(err,res){
                    expect(res).to.have.status(200);
                    expect(res.body).to.have.property('result').to.be.equal("this is ____ ____ input");
                    done();
                });
        });

    });
});
import { fakerPT_BR, faker } from '@faker-js/faker';
const  registroUsuario = require("../fixtures/registroUsuario.json");
const  registroUsuarioJaCriado = require("../fixtures/registroUsuario.json");
registroUsuario.name = fakerPT_BR.person.fullName().toLowerCase();
registroUsuario.email = fakerPT_BR.internet.email().toLowerCase();
primeiroNome  = faker.name.firstName();
grandeEmail = faker.string.alpha({ length: { min: 50, max: 50 } })

describe('teste da rota de registro de usuário', () => {
    var nome = 'Zillaell';
    var email = fakerPT_BR.internet.email().toLowerCase();    ;
    var senha = '123456';
  
    context('teste de registro de usuário', () => {
        it('registro de usuário', () => {
            cy.request({
                method: "POST",
                url: '/api/users',
                body: registroUsuario
            }).then((response) => {
                expect(response.status).to.be.eq(201)
                expect(response.body).to.have.property('id')
                expect(response.body).to.have.property('name')
                expect(response.body.name).to.equal(registroUsuario.name)
                expect(response.body).to.have.property('email')
                expect(response.body.email).to.equal(registroUsuario.email)
                expect(response.body).to.have.property('type')
                expect(response.body.type).to.equal(0)
                expect(response.body).to.have.property('active')
                expect(response.body.active).to.equal(true)
            })
        })
        it('validar o tipo de usuário criado', () => {
            cy.request({
                method: "POST",
                url: '/api/users',
                body: {
                    "name": registroUsuario.name,
                    "email": registroUsuario.email,
                    "password": "1234567"
                  }              
            }).then((response) => {
                expect(response.status).to.be.eq(201)
                expect(response.body).to.have.property('type')
                expect(response.body).to.have.property('type')
                expect(response.body.type).to.equal(0)
                //0 = comum, 1 = admin, 2 = crítico;
                expect(response.body).to.have.property('active')
                expect(response.body.active).to.equal(true)
            })
        })
        it('tentativa de registrar usuário com emoji no nome ', () => {
            cy.request({
                method: "POST",
                url: '/api/users',
                body: {
                    "name": registroUsuario.name + "♞👽",
                    "email": registroUsuario.email,
                    "password": "1234567"
                  }              
            }).then((response) => {
                expect(response.status).to.be.eq(201)
                expect(response.body).to.have.property('id')
                expect(response.body).to.have.property('name')
                expect(response.body.name).to.equal(registroUsuario.name + "♞👽")
                expect(response.body).to.have.property('email')
                expect(response.body.email).to.equal(registroUsuario.email)
                expect(response.body).to.have.property('type')
                expect(response.body).to.have.property('type')
                expect(response.body.type).to.equal(0)
                expect(response.body).to.have.property('active')
                expect(response.body.active).to.equal(true)
            })
        })
        it('ventativa de registrar usuário com emoji na senha ', () => {
            cy.request({
                method: "POST",
                url: '/api/users',
                body: {
                    "name": registroUsuario.name + "♞👽",
                    "email": registroUsuario.email,
                    "password": "1234567" + "♞👽"
                  }              
            }).then((response) => {
                expect(response.status).to.be.eq(201)
                expect(response.body).to.have.property('id')
                expect(response.body).to.have.property('name')
                expect(response.body.name).to.equal(registroUsuario.name + "♞👽")
                expect(response.body).to.have.property('email')
                expect(response.body.email).to.equal(registroUsuario.email)
                expect(response.body).to.have.property('type')
                expect(response.body).to.have.property('type')
                expect(response.body.type).to.equal(0)
                expect(response.body).to.have.property('active')
                expect(response.body.active).to.equal(true)
            })
        })
        it('tentativa de registrar usuário com alfabeto alternativo no nome, email e senha', () => {
            cy.request({
                method: "POST",
                url: '/api/users',
                body: {
                    "name": registroUsuario.name + "悲しみ",
                    "email": "悲しみ" + registroUsuario.email,
                    "password": "1234567" + "悲しみ"
                  }              
            }).then((response) => {
                expect(response.status).to.be.eq(201)
                expect(response.body).to.have.property('id')
                expect(response.body).to.have.property('name')
                expect(response.body.name).to.equal(registroUsuario.name + "悲しみ")
                expect(response.body).to.have.property('email')
                expect(response.body.email).to.equal(registroUsuario.email + "悲しみ")
                expect(response.body).to.have.property('type')
                expect(response.body).to.have.property('type')
                expect(response.body.type).to.equal(0)
                expect(response.body).to.have.property('active')
                expect(response.body.active).to.equal(true)
            })
        })
        it('tentativa de registrar usuário com fonte alternativa no nome e senha', () => {
            cy.request({
                method: "POST",
                url: '/api/users',
                body: {
                    "name": registroUsuario.name + "🅒🅐🅝🅘🅑🅐🅛",
                    "email":  registroUsuario.email,
                    "password": "🅒🅐🅝🅘🅑🅐🅛"
                  }              
            }).then((response) => {
                expect(response.status).to.be.eq(201)
                expect(response.body).to.have.property('id')
                expect(response.body).to.have.property('name')
                expect(response.body.name).to.equal(registroUsuario.name + "🅒🅐🅝🅘🅑🅐🅛")
                expect(response.body).to.have.property('email')
                expect(response.body.email).to.equal(registroUsuario.email)
                expect(response.body).to.have.property('type')
                expect(response.body).to.have.property('type')
                expect(response.body.type).to.equal(0)
                expect(response.body).to.have.property('active')
                expect(response.body.active).to.equal(true)
            })
        })
        it('tentativa de registrar usuário com email com 60 dígitos', () => {
            cy.request({
                method: "POST",
                url: '/api/users',
                body: {
                    "name": registroUsuario.name,
                    "email": grandeEmail + "tes@qa.com",
                    "password": "1234567"
                  }              
            }).then((response) => {
                expect(response.status).to.be.eq(201)
                expect(response.body).to.have.property('id')
                expect(response.body).to.have.property('name')
                expect(response.body.name).to.equal(registroUsuario.name)
                expect(response.body).to.have.property('email')
                expect(response.body.email).to.equal(grandeEmail + "tes@qa.com")
                expect(response.body).to.have.property('type')
                expect(response.body).to.have.property('type')
                expect(response.body.type).to.equal(0)
                expect(response.body).to.have.property('active')
                expect(response.body.active).to.equal(true)
            })
        })
        it('tentativa de registrar usuário com nome com 1 dígito', () => {
            cy.request({
                method: "POST",
                url: '/api/users',
                body: {
                    "name": 1,
                    "email": registroUsuario.email,
                    "password": "1234567"
                  }              
            }).then((response) => {
                expect(response.status).to.be.eq(201)
                expect(response.body).to.have.property('id')
                expect(response.body).to.have.property('name')
                expect(response.body.name).to.equal("1")
                expect(response.body).to.have.property('email')
                expect(response.body.email).to.equal(registroUsuario.email)
                expect(response.body).to.have.property('type')
                expect(response.body).to.have.property('type')
                expect(response.body.type).to.equal(0)
                expect(response.body).to.have.property('active')
                expect(response.body.active).to.equal(true)
            })
        })
        it('tentativa de registrar usuário com nome com 100 dígitos', () => {
            cy.request({
                method: "POST",
                url: '/api/users',
                body: {
                    "name": grandeEmail + grandeEmail,
                    "email": registroUsuario.email,
                    "password": "1234567"
                  }              
            }).then((response) => {
                expect(response.status).to.be.eq(201)
                expect(response.body).to.have.property('id')
                expect(response.body).to.have.property('name')
                expect(response.body.name).to.equal(grandeEmail + grandeEmail)
                expect(response.body).to.have.property('email')
                expect(response.body.email).to.equal(registroUsuario.email)
                expect(response.body).to.have.property('type')
                expect(response.body).to.have.property('type')
                expect(response.body.type).to.equal(0)
                expect(response.body).to.have.property('active')
                expect(response.body.active).to.equal(true)
            })
        })
        it('tentativa de registrar usuário com senha com 6 dígitos', () => {
            cy.request({
                method: "POST",
                url: '/api/users',
                body: {
                    "name": grandeEmail,
                    "email": registroUsuario.email,
                    "password": "123456"
                  }              
            }).then((response) => {
                expect(response.status).to.be.eq(201)
                expect(response.body).to.have.property('id')
                expect(response.body).to.have.property('name')
                expect(response.body.name).to.equal(grandeEmail)
                expect(response.body).to.have.property('email')
                expect(response.body.email).to.equal(registroUsuario.email)
                expect(response.body).to.have.property('type')
                expect(response.body).to.have.property('type')
                expect(response.body.type).to.equal(0)
                expect(response.body).to.have.property('active')
                expect(response.body.active).to.equal(true)
            })
        })
        it('tentativa de registrar usuário com senha com 12 dígitos', () => {
            cy.request({
                method: "POST",
                url: '/api/users',
                body: {
                    "name": grandeEmail,
                    "email": registroUsuario.email,
                    "password": "123456789112"
                  }              
            }).then((response) => {
                expect(response.status).to.be.eq(201)
                expect(response.body).to.have.property('id')
                expect(response.body).to.have.property('name')
                expect(response.body.name).to.equal(grandeEmail)
                expect(response.body).to.have.property('email')
                expect(response.body.email).to.equal(registroUsuario.email)
                expect(response.body).to.have.property('type')
                expect(response.body).to.have.property('type')
                expect(response.body.type).to.equal(0)
                expect(response.body).to.have.property('active')
                expect(response.body.active).to.equal(true)
            })
        })
    })
////////////////////////////BAD REQUEST/////////////////////////////
    describe('BAD REQUEST: ',()=>[
        before(function () {
            cy.registroUser(nome, email, senha);
          }),
        it('tentativa de registrar usuário sem inserir o campo nome',()=>{
            cy.request({
                method: "POST",
                url: '/api/users',
                body: {
                    "email": registroUsuario.email,
                    "password": "1234567"
                  },
                failOnStatusCode: true
            }).then((response) => {
                expect(response.status).to.be.eq(400)
                expect(response.body).to.be.an('object');
                cy.fixture('nomeVazio.json').then(function (nomeVazio) {
                    expect(response.body).to.deep.eq(nomeVazio)
                });
            })
        }),
        it('tentativa de registrar usuário sem inserir o campo email',()=>{
            cy.request({
                method: "POST",
                url: '/api/users',
                body:{
                    "name": registroUsuario.name,
                    "password": "1234567"
                  },
                failOnStatusCode: true
            }).then((response) => {
                expect(response.status).to.be.eq(400)
                expect(response.body).to.be.an('object');
                cy.fixture('emailVazio.json').then(function (emailVazio) {
                    expect(response.body).to.deep.eq(emailVazio)
                });
            })
        }),
        it('tentativa de registrar usuário sem inserir o campo senha',()=>{
            cy.request({
                method: "POST",
                url: '/api/users',
                body:{
                    "name": registroUsuario.name,
                    "email": registroUsuario.email,
                    "password": ""
                  },
                failOnStatusCode: true
            }).then((response) => {
                expect(response.status).to.be.eq(400)
                expect(response.body).to.be.an('object');
                cy.fixture('senhaVazia.json').then(function (senhaVazia) {
                    expect(response.body).to.deep.eq(senhaVazia)
                });
            })
        }),
        it('tentativa de registrar usuário com email já cadastrado',()=>{
            cy.request({
                method: "POST",
                url: '/api/users',
                body: registroUsuarioJaCriado,
                failOnStatusCode: true
            }).then((response) => {
                expect(response.status).to.be.eq(409)
                expect(response.body).to.be.an('object');
                cy.fixture('emailJaEmUso.json').then(function (emailJaEmUso) {
                    expect(response.body).to.deep.eq(emailJaEmUso)
                });
            })
        }),
        it('tentativa de registrar usuário com formato inválido com fonte alternativa no email',()=>{
            cy.request({
                method: "POST",
                url: '/api/users',
                body: {
                    "name": registroUsuario.name,
                    "email": "🅒🅐🅝🅘🅑🅐🅛" + registroUsuario.email,
                    "password": "1234567"
                  } ,
                failOnStatusCode: true
            }).then((response) => {
                expect(response.status).to.be.eq(400)
                expect(response.body).to.be.an('object');
                cy.fixture('nomeVazio.json').then(function (emailInvalido) {
                  expect(response.body).to.deep.eq(emailInvalido)
                });
            })
        }),
        it('tentativa de registrar usuário com formato inválido com emoji no email ',()=>{
            cy.request({
                method: "POST",
                url: '/api/users',
                body: {
                    "name": registroUsuario.name,
                    "email":  "♞👽" + registroUsuario.email,
                    "password": "1234567"
                  } ,
                failOnStatusCode: true
            }).then((response) => {
                expect(response.status).to.be.eq(400)
                expect(response.body).to.be.an('object');
                cy.fixture('emailInvalido.json').then(function (emailInvalido) {
                  expect(response.body).to.deep.eq(emailInvalido)
                });
            })
        }),
        it('tentativa de registrar usuário com formato inválido sem @',()=>{
            cy.request({
                method: "POST",
                url: '/api/users',
                body: {
                    "name": registroUsuario.name,
                    "email":  primeiroNome + "qa.com",
                    "password": "1234567"
                },
                failOnStatusCode: true
            }).then((response) => {
                expect(response.status).to.be.eq(400)
                expect(response.body).to.be.an('object');
                cy.fixture('emailInvalido.json').then(function (emailInvalido) {
                  expect(response.body).to.deep.eq(emailInvalido)
                });
            })
        }),
        it('tentativa de registrar usuário com formato inválido sem domínio',()=>{
            cy.request({
                method: "POST",
                url: '/api/users',
                body: {
                    "name": registroUsuario.name,
                    "email":  primeiroNome + "@",
                    "password": "1234567"
                  } ,
                failOnStatusCode: true
            }).then((response) => {
                expect(response.status).to.be.eq(400)
                expect(response.body).to.be.an('object');
                cy.fixture('emailInvalido.json').then(function (emailInvalido) {
                  expect(response.body).to.deep.eq(emailInvalido)
                });
            })
        }),
        it('tentativa de registrar usuário com formato inválido sem .com',()=>{
            cy.request({
                method: "POST",
                url: '/api/users',
                body: {
                    "name": registroUsuario.name,
                    "email":  primeiroNome + "@hope",
                    "password": "1234567"
                  } ,
                failOnStatusCode: true
            }).then((response) => {
                expect(response.status).to.be.eq(400)
                expect(response.body).to.be.an('object');
                cy.fixture('emailInvalido.json').then(function (emailInvalido) {
                  expect(response.body).to.deep.eq(emailInvalido)
                });
            })
        }),
        it('tentativa de registrar usuário com email com 4 dígitos',()=>{
            cy.request({
                method: "POST",
                url: '/api/users',
                body: {
                    "name": registroUsuario.name,
                    "email":  "s@.c",
                    "password": "1234567"
                  } ,
                failOnStatusCode: true
            }).then((response) => {
                expect(response.status).to.be.eq(400)
                expect(response.body).to.be.an('object');
                cy.fixture('emaiPequeno.json').then(function (emailPequeno) {
                  expect(response.body).to.deep.eq(emailPequeno)
                });
            })
        }),
        it('tentativa de registrar usuário com email com mais de 60 dígitos',()=>{
            cy.request({
                method: "POST",
                url: '/api/users',
                body: {
                    "name": registroUsuario.name,
                    "email":  "qwertyuiopasdfghjklzxcvbnmqwertyuiopasdfghjklzxcvbnmqwertyui" + registroUsuario.email,
                    "password": "1234567"
                  } ,
                failOnStatusCode: true
            }).then((response) => {
                expect(response.status).to.be.eq(400)
                expect(response.body).to.be.an('object');
                cy.fixture('emailGrande.json').then(function (emailGrande) {
                  expect(response.body).to.deep.eq(emailGrande)
                });
            })
        }),
        it('tentativa de registrar usuário com nome com 101 dígitos',()=>{
            cy.request({
                method: "POST",
                url: '/api/users',
                body: {
                    "name": "qwertyuiopasdfghjklzxcvbnmqwertyuiopasdfghjklzxcvbnmqwertyuiqwertyuiopasdfghjklzxcvbnmqwertyuiopasdfg",
                    "email":   registroUsuario.email,
                    "password": "1234567"
                  } ,
                failOnStatusCode: true
            }).then((response) => {
                expect(response.status).to.be.eq(400)
                expect(response.body).to.be.an('object');
                cy.fixture('nomeGrande.json').then(function (nomeGrande) {
                  expect(response.body).to.deep.eq(nomeGrande)
                });
            })
        }),
        it('tentativa de registrar usuário com senha com 5 dígitos',()=>{
            cy.request({
                method: "POST",
                url: '/api/users',
                body: {
                    "name": registroUsuario.name,
                    "email":   registroUsuario.email,
                    "password": "12345"
                  } ,
                failOnStatusCode: true
            }).then((response) => {
                expect(response.status).to.be.eq(400)
                expect(response.body).to.be.an('object');
                cy.fixture('senhaPequena.json').then(function (senhaPequena) {
                  expect(response.body).to.deep.eq(senhaPequena)
                });
            })
        }),
        it('tentativa de registrar usuário com senha com 13 dígitos',()=>{
            cy.request({
                method: "POST",
                url: '/api/users',
                body: {
                    "name": registroUsuario.name,
                    "email":   registroUsuario.email,
                    "password": "1234567891123"
                  } ,
                failOnStatusCode: true
            }).then((response) => {
                expect(response.status).to.be.eq(400)
                expect(response.body).to.be.an('object');
                cy.fixture('senhaGrande.json').then(function (senhaGrande) {
                  expect(response.body).to.deep.eq(senhaGrande)
                });
            })
        }),
    ])
})

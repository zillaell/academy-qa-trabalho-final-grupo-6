import { fakerPT_BR, faker } from '@faker-js/faker';
//import { beforeEach } from 'node:test';

describe('Cenários de testes de Pesquisar usuário por ID', () => {
    var nome = 'Zillaell';
    var email = fakerPT_BR.internet.email().toLowerCase();;
    var senha = '123456';
    var type;
    var token;
    var token2;
    var token3;
    var id;
    var id1;
    var id2;
    var id3;
    var emaill;
    var nomex = 'Mockador';


    beforeEach(()=>{
        emaill = fakerPT_BR.internet.email().toLowerCase();
        cy.registroUser(nomex, emaill, senha).then((response)=>{
            id = response.body.id;
            type= response.body.type;
        })
    })
    context('Cenários de Pesquisar usuário por ID com sucesso', () => {
        it('deve ser possível acessar a Pesquisar usuário por ID sendo um usuário do tipo admin',()=>{
            cy.registroUser(nome, '1'+ email, senha).then((Usuario)=>{
                id1 = Usuario.body.id;
                cy.logarUser('1'+ email, senha).then((usuario) => {
                    token = usuario.body.accessToken;
                    cy.promoverAdmin(token);
                    cy.request({
                        method: 'GET',
                        url: '/api/users/' + id,
                        headers: {
                            Authorization: 'Bearer ' + token
                        }
                    }).then((response) => {
                        expect(response.status).to.be.eq(200)
                        expect(response.body).to.have.property('id');
                        expect(response.body).to.have.property('name');
                        expect(response.body).to.have.property('type');
                        expect(response.body).to.have.property('email');
                        expect(response.body).to.have.property('active');
                        expect(response.body).to.have.property('id');
                        expect(response.body.id).to.eq(id);
                        expect(response.body.name).to.eq(nomex);
                        expect(response.body.email).to.eq(emaill);
                        expect(response.body.type).to.eq(type);
                        expect(response.body.id).to.not.eq(id1);    
                    })
                })
            })
        })
    })
    describe('Cenários de BAD REQUEST',()=>{
        it('não deve ser possível acessar a listagem de usuário sendo um usuário do tipo comum',()=>{
            cy.registroUser(nome,'2'+ email, senha).then((Usuario)=>{
                id2= Usuario.body.id;
            })
            cy.logarUser('2'+ email, senha).then((usuario) => {
                token2 = usuario.body.accessToken;
                cy.request({
                    method: 'GET',
                    url: '/api/users/' + id,
                    headers: {
                        Authorization: 'Bearer ' + token2
                    },
                    failOnStatusCode: false
                }).then((response) => {
                    expect(response.status).to.be.eq(403)
                    expect(response.body).to.be.an('object');
                    cy.fixture('forbidden.json').then(function (forbidden) {
                        expect(response.body).to.deep.eq(forbidden)
                    });
                })
            })
        })
        it('não deve ser possível acessar a listagem de usuário sendo um usuário do tipo crítico',()=>{
            cy.registroUser(nome,'3'+ email, senha).then((Usuario)=>{
                id3 = Usuario.body.id;
            })
            cy.logarUser('3'+ email, senha).then((usuario) => {
                token3 = usuario.body.accessToken;
                cy.promoverCritico(token3);
                cy.request({
                    method: 'GET',
                    url: '/api/users/' + id,
                    headers: {
                        Authorization: 'Bearer ' + token3
                    },
                    failOnStatusCode: false
                }).then((response) => {
                    expect(response.status).to.be.eq(403)
                    expect(response.body).to.be.an('object');
                    cy.fixture('forbidden.json').then(function (forbidden) {
                        expect(response.body).to.deep.eq(forbidden)
                    });
                })
            })
        })
    })
})
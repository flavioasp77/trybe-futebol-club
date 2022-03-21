import * as sinon from 'sinon';
import * as chai from 'chai';
import chaiHttp = require('chai-http');

import { app } from '../app';
import User from '../database/models/User';

import { Response } from 'superagent';

chai.use(chaiHttp);

const { expect } = chai;

const mockUser = {
  id: 1,
  username: 'flavioasp77',
  role: 'Flávio Pires',
  email: 'admin@admin.com'
};

describe('Ao fazer o login', () => {
  /**
   * Exemplo do uso de stubs com tipos
   */

  let chaiHttpResponse: Response;

  before(async () => {
    sinon
      .stub(User, "findOne")
      .resolves(mockUser as User);
  });

  after(()=>{
    (User.findOne as sinon.SinonStub).restore();
  })

  it('retorna status 200 - OK', async () => {
    chaiHttpResponse = await chai
       .request(app)
       .post('/login')
       .send({email: 'admin@admin.com', password: 'secret_admin'});

    expect(chaiHttpResponse).to.have.status(200);
  });

  it('verifica se usuário digitou um email inválido', async () => {
    chaiHttpResponse = await chai
      .request(app)
      .post('/login')
      .send({email: 'admin', password: 'secret_admin'});

    expect(chaiHttpResponse.body.message).to.be.equal('Incorrect email or password');
    expect(chaiHttpResponse).to.have.status(401);
  });

  it('verifica se usuário digitou uma senha inválida', async () => {
    chaiHttpResponse = await chai
      .request(app)
      .post('/login')
      .send({email: 'admin@admin.com', password: 'secr'});

    expect(chaiHttpResponse.body.message).to.be.equal('Incorrect email or password');
    expect(chaiHttpResponse).to.have.status(401);
  });

  it('verifica se usuário digitou um email', async () => {
    chaiHttpResponse = await chai
      .request(app)
      .post('/login')
      .send({ password: 'secret_admin'});

    expect(chaiHttpResponse.body.message).to.be.equal('All fields must be filled');
    expect(chaiHttpResponse).to.have.status(401);

  });
  it('verifica se usuário digitou uma senha', async () => {
    chaiHttpResponse = await chai
      .request(app)
      .post('/login')
      .send({email: 'admin@admin.com'});

    expect(chaiHttpResponse.body.message).to.be.equal('All fields must be filled');
    expect(chaiHttpResponse).to.have.status(401);
  });

  it('verifica se existe um token valido', async () => {
    chaiHttpResponse = await chai
      .request(app)
      .get('/login/validate')
      .send({ authorization: 157894});

    expect(chaiHttpResponse).to.have.status(401);
  });
});
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
  email: 'flavioasp77@gmail.com'
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
       .send({email: 'flavioasp77@gmail.com', password: '123456'});

    expect(chaiHttpResponse).to.have.status(200);
  });

  // it('Seu sub-teste', () => {
  //   expect(false).to.be.eq(true);
  // });
});
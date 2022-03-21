import * as sinon from 'sinon';
import * as chai from 'chai';
import chaiHttp = require('chai-http');
import { app } from '../app';
import Club from '../database/models/Club';
import { Response } from 'superagent';

chai.use(chaiHttp);

const { expect } = chai;

const clubs = [
	{
		"id": 1,
		"clubName": "Avaí/Kindermann"
	},
	{
		"id": 2,
		"clubName": "Bahia"
	},
	{
		"id": 3,
		"clubName": "Botafogo"
	}
];

describe('Ao busca pelos clubs ', async () => {
  let chaiHttpResponse: Response;

  before(async () => {
    sinon
      .stub(Club, "findAll")
      .resolves(clubs as []);
  });

  after(()=>{
    (Club.findAll as sinon.SinonStub).restore();
  });

  it('retorna status 200 - OK', async () => {
    chaiHttpResponse = await chai
       .request(app)
       .get('/clubs')
    expect(chaiHttpResponse).to.have.status(200);
  });

  it('retorna os clubes listatos', async () => {
    chaiHttpResponse = await chai
       .request(app)
       .get('/clubs')
    expect(chaiHttpResponse.body).to.have.length(3);
  });
});
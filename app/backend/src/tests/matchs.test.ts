import * as sinon from 'sinon';
import * as chai from 'chai';
import chaiHttp = require('chai-http');

import { app } from '../app';

import Match from '../database/models/Match';

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
      .stub(Match, "findAll")
      .resolves(clubs);
  });

  after(()=>{
    (Match.findAll as sinon.SinonStub).restore();
  })
});
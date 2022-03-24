import * as sinon from 'sinon';
import * as chai from 'chai';
import chaiHttp = require('chai-http');
import { app } from '../app';
import Match from '../database/models/Match';
import { Response } from 'superagent';

chai.use(chaiHttp);

const { expect } = chai;

const mockMatchs = [
  {
    "id": 1,
    "homeTeam": 16,
    "homeTeamGoals": 1,
    "awayTeam": 8,
    "awayTeamGoals": 1,
    "inProgress": false,
    "homeClub": {
      "clubName": "São Paulo"
    },
    "awayClub": {
      "clubName": "Grêmio"
    }
  },
  {
    "id": 41,
    "homeTeam": 16,
    "homeTeamGoals": 2,
    "awayTeam": 9,
    "awayTeamGoals": 0,
    "inProgress": true,
    "homeClub": {
      "clubName": "São Paulo"
    },
    "awayClub": {
      "clubName": "Internacional"
    }
  }
]

describe('Ao chamar a rota match', async () => {
  let chaiHttpResponse: Response;

  before(async () => {
    sinon
      .stub(Match, "findAll")
      .resolves(mockMatchs as []);
  });

  after(()=>{
    (Match.findAll as sinon.SinonStub).restore();
  });

  it('retorna status 200 - OK', async () => {
    chaiHttpResponse = await chai
       .request(app)
       .post('/matchs')

    expect(chaiHttpResponse).to.have.status(200);
  });
});
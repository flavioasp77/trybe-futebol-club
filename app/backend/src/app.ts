import * as express from 'express';
import * as cors from 'cors';
import loginRouter from './database/routes/loginRoute';
import matchsRouter from './database/routes/matchsRoute';
import leaderBoardRouter from './database/routes/leaderBoardRoute';

class App {
  public app: express.Express;
  // ...

  constructor() {
    this.app = express();
    this.config();
    this.routes();
    // ...
  }

  private config():void {
    const accessControl: express.RequestHandler = (_req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
      res.header('Access-Control-Allow-Headers', '*');
      next();
    };

    this.app.use(accessControl);
    this.app.use(express.json());
    this.app.use(cors());

    // ...
  }

  routes(): void {
    this.app.use(loginRouter);
    this.app.use(matchsRouter);
    this.app.use(leaderBoardRouter);
  }

  // ...
  public start(PORT: string | number):void {
    this.app.listen(PORT, () => console.log(`Rodando na porta ${PORT}`));
  }
}

export { App };

// A execução dos testes de cobertura depende dessa exportação
export const { app } = new App();

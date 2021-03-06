# Projeto Trybe Futebol Club

Neste projeto do curso da Trybe, desenvolvi o Backend para uma aolicação para listar jogos de futebol utilidando `NodeJs`, `TypeScript`, `SEQUELIZE`, `testes`. O `Frontend foi fornecido pela equipe da [Trybe](https://www.betrybe.com/).

## Habilidades desenvolvidas:

<img src="https://github.com/tryber/sd-014-a-trybe-futebol-clube/blob/main/front-example.png?raw=true" />

- Realizar a dockerização dos apps, network, volume e compose;
- Modelar dados com MySQL através do Sequelize;
- Criar e associar tabelas usando models do sequelize;
- Construir uma API REST com endpoints para consumir os models criados;
- Fazer um CRUD utilizando ORM;

### Instalando Dependências

Instale as dependências:
`npm install`

### Para rodar o projeto:
Configure as variaveis de ambiente de acordo com seu banco de dados local:

No Backend:

```
PORT
DB_USER
DB_PASS
DB_HOST
DB_NAME
DB_PORT

```

No Frontend:

`SKIP_PREFLIGHT_CHECK=true`

Suba o docker com o comando:
`npm run compose:up`

Ulilize a URL `localhost:3000` no seu navegador.

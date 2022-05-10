> This is a challenge by [Coodesh](https://coodesh.com/)

<br>

# Space Flight News
A aplicação Space Flight new foi um desafio da [Coodesh](https://coodesh.com/) que consome os dados de uma API pronta da [Space Flight News](https://api.spaceflightnewsapi.net/v3/documentation) para popular os dados do banco de dados da API desenvolvida neste desafio que, por sua vez, é responsável por disponibilizar as funcionalidades de listagem dos artigos armazenados no banco de dados e manter a lista de artigos sicronizada com a base original de dados por meio de um CRON executado todos os dias 9:00 horas (GMT-3). Na aplicação front-End desenvolvida para o consumo da API, temos a possibilidade de visualizar os artigos em um layout proposto pelo wireframe do desafio, além de possuir as funcionalidades de filtragem por termos do título dos artigos, ordenação por data de publicação e carregamento de novos artigos

<br>

## Tecnologias Utilizadas

<h3><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
width="5%" height="auto">&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
width="5%" height="auto">&nbsp;&nbsp;&nbsp;React Js (Utilizando Typescript)</h3>

Para construção do front-end da aplicação.

<br>

<h3><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
width="5%" height="auto">&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
width="5%" height="auto">&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
width="5%" height="auto">&nbsp;&nbsp;&nbsp;Node Js (Utilizando Typescript e Express)</h3>

Para construção do back-end.

<br>

<h3><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
width="5%" height="auto">&nbsp;&nbsp;&nbsp;MongoDB</h3>

Para construção do banco de dados.

<br>

## Features

### Back-end

  * Script de população de dados;
  * Listagem de Artigos
  * Sincronização de Artigos novos com CRON
  * Paginação de rota
  * Filtro de requisições

### Front-end

* Vizualização de listagem dinâmica de artigos
* Pesquisa de termos nos títulos
* Ordenação por data crescente e decrescente
* Carregamento de novos artigos


## Instruções de Instalação

####Observação: caso não possua o gerenciador de pacotes Yarn instalado, utilize os comandos equivalentes do NPM ou instale o [Yarn](https://classic.yarnpkg.com/lang/en/docs/install/).

### Back-end:
rode os seguintes scripts em ordem:

```Yarn``` ou ```npm install```
```Yarn populate``` ou ```npm run populate```
```Yarn start``` ou ```npm start```

### Front-end:

rode os seguintes scripts em ordem:

```Yarn``` ou ```npm install```
```Yarn start``` ou ```npm start```

<br>

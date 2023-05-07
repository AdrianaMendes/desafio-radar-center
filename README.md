[![Licence](https://img.shields.io/github/license/AdrianaMendes/bdr-desafio-radar-center?style=for-the-badge)](./LICENSE) ![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white) ![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white) ![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white) ![Angular](https://img.shields.io/badge/angular-%23DD0031.svg?style=for-the-badge&logo=angular&logoColor=white) ![Spring](https://img.shields.io/badge/spring-%236DB33F.svg?style=for-the-badge&logo=spring&logoColor=white) ![Swagger](https://img.shields.io/badge/-Swagger-%23Clojure?style=for-the-badge&logo=swagger&logoColor=white)

# Radar Center

O projeto consiste no desenvolvimento de uma API e um Serviço. A aplicação WEB foi desenvolvida com backend em Java 11 + Spring Boot + Maven + PostgreSQL, Angular e documentação Swagger. O contexto da aplicação é sobre uma central de infrações, onde os registros são gerados de forma automatizada a cada três segundos e os dados são atualizados no dashboard a cada dez segundos.

## Teste localhost

Para testar localmente a aplicação, é preciso configurar o arquivo properties do backend conforme mostrado abaixo. No presente projeto foi utlizado a IDE Spring Tool Suite para realizar o deploy.

```
## POSTGRES
db.username=postgres
db.password=1234
db.host=localhost
db.database=postgres
db.port=5432
```

![ApplicationProperties](images/application-properties.png)

![Connection 1](images/connection-1.png)

![Spring Tool Suite](images/sts.png)


## Swagger

O projeto foi desenvolvido com a documentação Swagger, que está disponível no aquivo ```swagger.json```.

Para acessar a documentação swagger acesse esta URL: http://localhost:8080/swagger-ui/index.html

![Swagger](images/swagger-1.png)

## Frontend Angular

Para executar a aplicação frontend é preciso ter o Node e NPM instalado no ambiente e executar o comando npm start e acessar o link http://localhost:4200/

![Frontend 1](images/frontend-1.png)

![Frontend 2](images/frontend-2.png)

## Licença

Este projeto está sob licença MIT © 2023 Adriana Mirian Mendes Cardoso.
Para mais informações acesse o arquivo :scroll: `LICENSE`.

## Contato

:email: E-Mail: ​[adrianamirianmc@gmail.com](adrianamirianmc@gmail.com)

:clipboard: Linkedin: ​[https://www.linkedin.com/in/amendescardoso](https://www.linkedin.com/in/adriana-mirian-mendes-cardoso)

:package: GitHub:  [https://github.com/AdrianaMendes](https://github.com/AdrianaMendes)
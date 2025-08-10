![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white) ![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white) ![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white) ![Angular](https://img.shields.io/badge/angular-%23DD0031.svg?style=for-the-badge&logo=angular&logoColor=white) ![Spring](https://img.shields.io/badge/spring-%236DB33F.svg?style=for-the-badge&logo=spring&logoColor=white) ![Swagger](https://img.shields.io/badge/-Swagger-%23Clojure?style=for-the-badge&logo=swagger&logoColor=white)

# Radar Center

O projeto consiste no desenvolvimento de uma API e de um serviço. A aplicação web foi construída com backend em Java 11, utilizando Spring Boot, Maven e PostgreSQL, e frontend em Angular, com documentação gerada pelo Swagger.

O sistema funciona como uma central de infrações, onde os registros são gerados automaticamente a cada três segundos, e os dados do dashboard são atualizados a cada dez segundos.

## Deploy

Para testar a aplicação localmente é necessário configurar o arquivo ``properties`` conforme o exemplo abaixo. 

```
## POSTGRES
db.username=postgres
db.password=1234
db.host=localhost
db.database=postgres
db.port=5432
```

1. Clone o repositório:
   ```bash
   git clone git clone https://github.com/AdrianaMendes/desafio-radar-center.git
   ```

2. Navegue até o diretório do projeto e execute:
   ```bash
   ./mvnw spring-boot:run
   ```

3. Acesse o sistema em:
   ```
   http://localhost:8080/swagger-ui/index.html

## Swagger

O projeto foi desenvolvido com a documentação Swagger, que está disponível no aquivo ```swagger.json```.

![Swagger](images/swagger-1.png)

## Frontend Angular

Para executar a aplicação frontend é preciso ter o Node e NPM instalado no ambiente e executar o comando npm start e acessar o link http://localhost:4200/

![Frontend 1](images/frontend-1.png)

![Frontend 2](images/frontend-2.png)

## Licença

Este projeto está sob licença MIT © 2023 Adriana Cardoso. Para mais informações acesse o arquivo :scroll: `LICENSE`.

## Contato

**Adriana Cardoso**  
Desenvolvedora Java | Spring Boot | Angular  
📧 adrianamirianmc@gmail.com

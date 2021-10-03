# Descrição

- Modele um domínio para o seguinte problema:

  - Modele um sistema para uma empresa de proteção veicular.
  - Nesse sistema existem clientes e terceiros.
  - Os clientes podem criar uma conta inserindo informações básicas de cadastro.
  - Os clientes podem editar alguns dados cadastrados.
  - Os clientes podem criar um evento de acidente, onde será possível informar o veículo envolvido no acidente e o(s) terceiro(s).
  - Os terceiros são cadastrados quando é criado um acidente, se não houver um registro prévio na base de dados.
  - Todos os usuários(clientes e terceiros) precisam ter documentos associados as suas contas.
  - Quando um houve o cadastro de um cliente que já foi envolvido como terceiro em um acidente, é preciso migrar o usuário para cliente sem perder o vínculo criado no acidente.

- Crie uma API RESTful em NodeJS com as seguintes tecnologias:

  - Typescript.
  - HapiJS.
  - TypeORM.
  - PostgresSQL.
  - Jest.

### Executando o projeto

É necessario executar esse comando para subir a base de dados, `docker run --name db_test_u4c -e POSTGRES_PASSWORD=1234 -d -p 5432:5432 postgres`.

É necessario utilizar os comandos `yarn run develop` ou `npm run develop` para rodar utilizando o ambiente, ou `npm run develop` para rodar em produção.





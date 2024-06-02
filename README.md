# API: Gerenciamento de alunos

### Ferramentas e Tecnlogias utilizadas

- bcryptjs
- dotenv
- express
- jsonwebtoken
- mariadb
- multer
- sequelize

### Primeiros passos 

- Instalação de pacotes e dependencias de desenvolvimento, utilize o comando npm install ou npm i 

- Criar um arquivo .env que vai conter o IP do seu servidor, a porta, senha do banco de dados, nome do banco de dados, qual banco de dados está sendo utilizado, seu usuário root, um tempo de expiração de sessões dentro do seu projeto.

- Criado e adicionado o .env ao seu diretório principal, agr vem a parte onde você roda a API em desenvolvimento.

### Comando utilizados para subir a API em desenvolvimento 

- npm run dev 

- Este comando está presente no package.json.
- Caso deseje utilizar a API em produção, mova os arquivos app.js e o server.js para dentro da pasta source e utilize o comando npm run build.
- Em produção não é utilizado o nodemon por isso, utilize o npm start no lugar do run dev em produção. 

### Rotas para Alunos

- Existem 5 rotas feitas atuamente no projeto que finalizam um CRUD 
    - Index: Busca todos os alunos na base de dados
    - Show: Busca somente um aluno com base no ID na base de dados
    - Store: Adiciona novos alunos na base de dados
    - Update: Atualiza um aluno com base no ID na base de dados
    - Delete: Apaga um aluno com base no ID na base de dados

### Rotas para Usuários

- Existem 5 ao todo
    - Index: Busca todos os usuários na base de dados
    - Show: Busca somente um usuário com base no token na base de dados
    - Store: Adiciona novos usuários na base de dados
    - Update: Atualiza um usuário com base no token na base de dados
    - Delete: Apaga um usuário com base no token na base de dados
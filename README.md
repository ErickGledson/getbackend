## 💻 Sobre o projeto

A MEInveste busca ajudar os microempreendedores a terem sucesso em seus negócios, levando segurança e descomplicando a burocracia dos serviços financeiros.
Procuramos ser a ponte entre pessoas que estão dispostas a investir e os empreendedores que precisam de capital para aplicar em seus negócios.

A MEInveste é uma plataforma de Marketplace Lending que também engloba o Peer to Peer Lending, ou seja, não fornecemos meramente empréstimos empresariais ou capital de giro.
Conectamos empresas que precisam de investimento com investidores, eliminando toda a burocracia e os procedimentos comuns das instituições financeiras.
Procuramos oferecer taxas de juros mais baratas para os tomadores de empréstimo e taxas de rentabilidades mais altas para os investidores
Afinal, se considerarmos o delicado momento da economia nacional, ter uma facilidade maior de acesso ao crédito e taxas de juros mais justas pode ser uma das saídas que o Brasil precisa para voltar a crescer e prosperar.

### 💻 Como Rodar o Projeto
Para utilizar esse projeto, basta voce ter o docker instalado em seu computador.
Sendo assim, rode o seguinte comando:

`docker-compose up`

Com ele, o docker levantará 3 containers: nodejs, mongodb e o ngrok.

Para acessar diretamente a API, em seu navegador digite: `localhost:9000`.
Para acessar pelo tunelamento feito com o ngrok, digite: `localhost:4040  e então pegue a URL que ele fornece (desse jeito, qualquer pessoa na internet pode acessar ao possuir a URL).

As URLs da API:
[POST] `/api/user` - Cria um novo usuário
[POST] `/api/user/login` - Fazer login
[GET] `api/project` - Listagem de projetos
[GET] `api/project/<id>` - Obtem um projeto por ID
[POST] `api/project` - Cria um novo projeto
[PUT] `api/project/<id>` - Atualiza um projeto por ID
[DELETE] `api/project/<id>` - Deleta um projeto por ID

Utilize este projeto com o https://github.com/bkkater/meinveste-mobile

## 🤖 Equipe
- [Bianca](https://github.com/bkkater)
- [Juliana](https://www.linkedin.com/in/juliana-talita-b683581b2/)
- [Eduarda](https://www.linkedin.com/in/eduarda-barboza-tavares-612a55159/)
- [Jhennifer](https://www.linkedin.com/in/jhennifer-pimentel-0518171b2/)
- [Erick](https://github.com/ErickGledson)

# Portfolio
Este é o repositório do meu projeto de Portfolio, uma aplicação desenvolvida em Next.js que possui funcionalidades para visualizar informações sobre mim, exibir projetos provenientes de um banco de dados em tempo real e cadastrar novos projetos.

![Imagem do portfólio](https://firebasestorage.googleapis.com/v0/b/portf0lio-2b546.appspot.com/o/images%2Fporfolio-img.png?alt=media&token=704c816e-bfcf-4d5c-9bee-73f37a0c2577)

## Funcionalidades
- Visualizar informações sobre mim
- Visualizar uma lista de projetos obtidos do banco de dados em tempo real
- Cadastrar um novo projeto no banco de dados com acesso restrito
- Login com GitHub ou Google 

![Projetos](https://firebasestorage.googleapis.com/v0/b/portf0lio-2b546.appspot.com/o/images%2Fprojects.png?alt=media&token=c99cefee-f27a-4e80-bbc7-0cb550677cbd)

## Ferramentas Utilizadas
Next.js: Foi escolhido como framework principal devido à sua facilidade de desenvolvimento, renderização do lado do servidor (SSR) e suporte a rotas estáticas.
Node.js: Foi utilizado para criar a API que consome o banco de dados Realtime Database.
Realtime Database: Foi escolhido como banco de dados para armazenar os projetos devido à sua capacidade de atualização em tempo real e integração fácil com o Node.js.
NextAuth: Foi utilizado para lidar com a autenticação na aplicação, permitindo que apenas eu tenha acesso à funcionalidade de cadastrar novos projetos.
Firebase Storage: Foi escolhido para lidar com o upload de imagens para a criação de novos projetos, devido à sua facilidade de uso e integração com o Next.js.
Tailwind CSS: Foi utilizado como biblioteca de estilos para facilitar a construção e personalização do design da aplicação.
Heroku: Foi utilizado para o deploy da API criada com Node.js, garantindo que a aplicação esteja disponível online.
Vercel: Foi utilizado para o deploy do front-end desenvolvido em Next.js, permitindo que a aplicação seja facilmente acessível na web.
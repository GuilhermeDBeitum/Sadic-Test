# SADIC TEST APP

Nosso aplicativo é para quem gosta de piadas para melhorar o astral. 
Logo após logarmos, ao acessar a página inicial seu humor esta neutro, continue, você recebe piadas para melhorar esse humor, a cada 20 segundos uma nova piada e uma atualização no seu humor, aproveite o app:

<img width="1254" alt="Captura de Tela 2022-09-20 às 22 17 05" src="https://user-images.githubusercontent.com/54703843/191392735-18911276-39c2-48a2-9722-09048e84567b.png">


## Project setup

- login: admin@admin.com
- password: admin123
<hr>

- Primeiro criamos a imagem do docker, ela adiciona todas as dependências necessárias para rodar a aplicação.
```

docker build -t sadic .
```

- Agora utilizamos o comando para rubir os containers frontend e backend.
```

docker-compose up
```


# Desafio

## Teste de Desenvolvedor Web Pleno


Crie um novo repositório no GitHub e envie seu código seguindo as especificações abaixo.


## O teste sádico


### Melhore e depois arruine o humor de uma SPA ulizando a API de piadas geek.

- A aplicação inicia com uma tela de login.
- O formulário de login deve conter campos os campos de e-mail e senha (validação para e-mail e mínimo de 8 caracteres para a senha).
- O usuário deverá autenticar-se com um e-mail e senha padrão.
- Após o login, a primeira rota (URL do navegador) é /inicial, e possui uma tela nem feliz, nem triste :|
- O primeiro clique na tela deve alterar a rota para /triste, e por consequência torná-la 100% triste :(
- Um clique na tela triste deve alterar a rota para /poker-face e chamar uma piada randômica do back-end, para ser apresentada em uma janela modal.
- A tela deverá progressivamente melhorar o seu humor enquanto eu, usuário, leio a piada (ou mais de uma) para ela :)
- A modal com a piada só poderá ser fechada após a tela estar 100% feliz, e a rota para isso deverá ser /feliz.
- Fechada a modal, a SPA volta a sua indecisão /inicial sobre o seu humor :|


### O que deve conter resumidamente

- Vue.js;
- Componentes de interface gráfica;
- Gerenciamento de estado no cliente;
- Testes na camada do cliente (vamos chamar de front-end para facilitar);
- Análise estática de código (lint);
- Uso do Docker;
- API REST;
- Autencação com JWT no back-end;
- Migrações na camada do back-end para criação das tabelas e inserção de dados; Um README.md explicando a solução e como rodar o projeto;


### Requisitos

- URL da API de piadas geek: https://github.com/sameerkumar18/geek-joke-api
- O projeto deve estar separado entre back-end (API REST) e front-end (que consulta a API REST).
- Instalar o Docker, rodar o comando docker-compose up e acessar o navegador deve ser todo o necessário para rodar o projeto.
- As chamadas para a API geek devem ser feitas a partir do back-end (front-end chama o back-end, back-end chama a API geek e devolve o resultado para o -front-end).
- As tabelas e o usuário inicial precisam ser criados no banco de dados automacamente a partir de um seed para o banco.
- Os dados de acesso do usuário inicial deverão estar documentados no README do projeto.
- A autencação deve ser feita via JWT.
- O token deve ser persistido na sessão, ou seja, se eu logar e recarregar o navegador, não preciso fazer um novo login.


### Sugestões de tecnologias:

- Jest para escrever os testes;
- Vuex para gerenciamento de estado; Express.js ou Lumen/Laravel para o back-end;
- Dica: Os frameworks sugeridos possuem todos os itens necessários para a implementação do teste.
- Caso queira ulizar outra tecnologia complementar às obrigatórias, jusfique no README do projeto.

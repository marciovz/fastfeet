# Fastfeet

> Aplicativo para gerenciamento de entregas de encomendas para transportadoras

Com o Fastfeet o administrador pode cadastrar entregadores, cadastrar e distribuir encomendas aos entregadores, gerenciar as datas de retiradas e entregas finalizadas, verificar problemas e fazer cancelamento das entregas.

A aplicação utiliza as tecnologias NodeJS no back-end, ReactJS no front-end e React-Native no mobile, e faz parte do desafio final para certificação do curso Bootcamp da Rocketseat.

## :gear: Back-end

Desenvolvido com a tecnologia NodeJS, é responsável por gerenciar os acessos e responder todas as requisições da aplicação. Utiliza tecnologia JWT nas autenticações de usuários, banco postgree para armazenamento dos dados de entrega, entregador, destinatários entre outros, e o banco Redis para armazenamento de dados para a fila de envio de emails.

### :information_source: Instalação do projeto em uma máquina local

> :one: **Criação e inicialização dos bancos de dados**
>
> O projeto fastfeet utiliza o banco de dados Postgree para armazenamento dos dados da aplicação e o Redis para armazenamendo da fila de envio de emails.
> ```bash
> # Instalação do Redis com o docker
>docker run --name fastfeetRedis -p 6379:6379 -d -t redis:alpine
> # Iniciando o banco Redis
> docker start fastfeetRedis
> ```
> ```bash
> # Instalação do Postgree com o docker
>docker run --name fastfeetdb -e POSTGRES_DB=fastfeetdb -e POSTGRES_USER=userfastfeetdb -e POSTGRES_PASSWORD=passfastfeetdb  -p 5432:5432 -d postgres 
>
># Iniciando o banco Postgree
>docker start fastfeetdb
>```

> :two: **Download do projeto**
>
> Clonar a pasta do projeto para sua máquina local e instalar as dependências.
> ```bash
> # clonar o repositório
> git clone https://github.com/marciovz/fastfeet.git
>
># acessar a pasta backend
>cd fastfeet/backend
>
> # instalar as dependências do projeto
> yarn
> ```

> :three: **Arquivos de configuração**
>
>   Fazer uma copiar do arquivo .env.exemplo  na pasta raiz do back-end e renomeá-lo para .env
>   No arquivo .env preencher as seguintes variáveis de configuração:
>   
> ```javascript
> //Código para criptografia jwt
> APP_SECRET= Qualquer palavra ou sequencia chave
>   
> //Configuração do banco Postgree
> DB_HOST=localhost
> DB_USER=userfastfeetdb
> DB_PASS=passfastfeetdb
> DB_NAME=fastfeetdb
> 
> //Configuração do banco Redis
> REDIS_HOST=127.0.0.1
> REDIS_PORT=6379
>   
> //Configurações do serviço de email
> MAIL_HOST=smtp.mailtrap.io
> MAIL_PORT=2525
> MAIL_USER=seu_usuário_de_acesso_no_mailtrap
> MAIL_PASS=sua_senha_de_acesso_ao_mailtrap
> ```

> :four: **Iniciando o servidor back-end**
>
> Com os bancos de dados já rodando, item 1, iniciar o servidor da aplicação e o servidor de envio de emails.
> ```bash
> # Iniciando o servidor da aplicação
>  yarn dev
> ```
> Em outra janela de console:
> ```bash
>  # Iniciando o servidor de envio de emails
>  yarn queue
> ```


## :computer: Web

> Em desenvolvimento

  

## :iphone: Mobile

> Em desenvolvimento

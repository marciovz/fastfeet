# Fastfeet

**Aplicativo para gerenciamento de entregas de encomendas para transportadoras**

Com o Fastfeet o administrador pode cadastrar entregadores, cadastrar e distribuir encomendas aos entregadores, gerenciar as datas de retiradas e entregas finalizadas, verificar problemas e fazer cancelamento das entregas.

A aplicação utiliza as tecnologias NodeJS no back-end, ReactJS no front-end e React-Native no mobile, e faz parte do desafio final para certificação do curso Bootcamp da Rocketseat.

Para testar o sistema Fastfeet, é necessário a instalação do servidor backend, web e o mobile.

## :gear: Back-end

Desenvolvido com a tecnologia NodeJS, é responsável por gerenciar os acessos e responder todas as requisições da aplicação. Utiliza tecnologia JWT nas autenticações de usuários, banco postgree para armazenamento dos dados da entrega, dos entregadores, dos destinatários entre outros, e o banco Redis para armazenamento de dados da fila de envio de emails.

### Instalação do servidor backend local
#### 1. Recomendações para preparação do ambiente de avaliação

Este projeto foi desenvolvido e testado na versão do node 10.16.2, com o gerenciador de dependências yarn 1.22.4, e docker 19.03.8. Recomendamos a instalação dessas ferramentas nestas versões ou superiores;

#### 2. Instalação do banco de dados com Docker

O projeto fastfeet utiliza o banco de dados Postgree para armazenamento dos dados da aplicação e o Redis para armazenamendo da fila de envio de emails. 
```bash
 # Instalação do Redis com o docker
 $ docker run --name fastfeetRedis -p 6379:6379 -d -t redis:alpine
 ```
 ```bash
 # Instalação do Postgree com o docker
 $ docker run --name fastfeetdb -e POSTGRES_DB=fastfeetdb -e POSTGRES_USER=userfastfeetdb -e POSTGRES_PASSWORD=passfastfeetdb  -p 5432:5432 -d postgres:11 
```

#### 3. Download do projeto

Clonar a pasta do projeto em sua máquina local e instalar as dependências.
```bash
 # clonar o repositório
 $ git clone https://github.com/marciovz/fastfeet.git

 # acessar a pasta backend
 $ cd fastfeet/backend

 # instalar as dependências do projeto
 $ yarn
```

#### 4. Arquivos de configuração

Criar um arquivo .env na raiz do projeto backend, com o conteúdo o arquivo .env.exemplo, e
preenche as variáveis com suas respectivas informações.
Você precisa fazer uma conta no site do mailtrap.io e acionar suas credenciais nas configurações abaixo.
   
```javascript
 //Código para criptografia jwt
 APP_SECRET= Qualquer palavra ou sequencia chave
  
 //Configuração do banco Postgree
 DB_HOST=localhost
 DB_USER=userfastfeetdb
 DB_PASS=passfastfeetdb
 DB_NAME=fastfeetdb
 
 //Configuração do banco Redis
 REDIS_HOST=127.0.0.1
 REDIS_PORT=6379
   
 //Configurações do serviço de email
 MAIL_HOST=smtp.mailtrap.io
 MAIL_PORT=2525
 MAIL_USER=seu_usuário_de_acesso_no_mailtrap
 MAIL_PASS=sua_senha_de_acesso_ao_mailtrap
```

#### 5. Criando e populando a Base de dados para teste
```bash
 # Rodar a migração
 $ yarn sequelize db:migrate

 # Rodar o seeds
 $ yarn sequelize db:seed:all
```

### Iniciamdo o servidor backend
#### 1. Iniciar os bancos de dados e o servidor da aplicação
Verifique se os bancos fastfeetdb e o fastfeetRedis estejam rodando com o comando 
```bash
 # Verificando bancos ativos
 $ docker ps
```
Caso os bancos não estejam ativos, reinicie eles com os comandos abaixo:
```bash
 # Iniciando o banco Postgree
 $ docker start fastfeetdb
```
```bash
 # Iniciando o banco Redis
 docker start fastfeetRedis
 ```
Agora inicie os servidores da aplicação
```bash
 # Iniciando o servidor da aplicação
 yarn dev
```
Abrir outra janela do terminal e iniciar o servidor de fila de email:
```bash
 # Iniciando o servidor de envio de emails
 yarn queue
```
Pronto, o servidor backend está configurado e rodando.


## :computer: Web

A versão Web do projeto é direcionada para administradores da distribuidora.
Nessa versão, os administradores terão acesso a gestão de entregadores, destinatários e encomendas,
fazendo triagem de encomendas atribuindo a um entregador, e analizando problemas decorridos nas entregas.

### Instalando o servidor web localmente
#### 1. Instalar das dependências do projeto Web
```bash
 # Acessar a pasta fastfeet/web
 $ cd fastfeet/web
```
```bash
 # Rodar o instalador das dependências
 $ yarn
```

### Iniciando o servidor web
#### 1. Iniciar a aplicação Web
```bash
 # Rodar o comando para estartar o servidor web
 $ yarn start
```
Ao iniciar o servidor, a página de login da aplicação será aberta.
Adiciona as credenciais do adminstrador para acessar o sistema.
**Login:** admin@fastfeet.com
**Senha:** 123456

  

## :iphone: Mobile

A versão mobile do projeto Fastfeet é direcionada para entregadores gerenciarem suas encomendas.
Com o aplicativo mobile o entregador terá acesso a sua lista de entregas finalizadas e pendentes, ver detalhes de cada encomenda, poderá visualizar e adicionar problemas decorrentes na entrega, e finalizar a entrega adicionando uma imagem da assinatura do destinatário.

### Instalando o projeto Mobile (Android)
  ###### Obs.: O app fastfeet foi desenvolvido e testado somente na plataforma ANDROID.

Acesse a pasta do projeto mobile
```bash
 # Acessar a pasta do projeto mobile 
 $ cd fastfeet/mobile
```

#### 1. Instalação do React-Native
```bash
# Instalar o react-native-cli
$ npm install -g react-native-cli

# Verifique se o react-native-cli foi instado
$ react-native-cli -v
```

#### 2. Configuração do emulador
Este aplicativo foi desenvolvido utilizando como emulador um celular Android e as configurações para Linux Mint 19.
Para instalação e configuração do emulador e outros pacotes necessários, recomenda-se seguir os passos descrito no tutorial da Rocketseat, no link https://react-native.rocketseat.dev/, de acordo com as características de seu ambiente.


#### 3. Configuração do aplicativo
```bash
 # instalando as dependências do projeto
 $ yarn
```
 
 Abra o arquivo de configuração hostBackend.js localizado na pasta /src/config/hostBackend.js e confirme as seguintes informações:
```javascript
 {
	protocol:  'http',								// protocolo utilizado
	host:  '192.168.1.101',						// endereço ip do servidor backend (colocar o ip)
	port:  '3333',										// porta na qual está rodando o servidor backend
 }
```

### Emulando o aplicativo mobile

Certifique-se que o emulador ou o celular esteja devidamente conectado.

### 1. Criando o Bundle da aplicação
```bash
 # Execute o comando
 $ react-native run-android
```
### 2. Iniciando o emulador
```bash
 # Execute o comando
 $ react-native start 
```
Pronto, o aplicativo estará rodando na tela do emulador.
Você poderá acessar o aplicativo digitando o id de um entregador, tente o id 1 do entregador já cadastrado.

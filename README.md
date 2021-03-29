 Setup

### Versionamento

Para ter acesso ao código fonte do projeto é necessário efetuar o clone dos repositórios pelos links abaixo:

**Repositório front-end:** https://github.com/anderchenko1993/app-veiculos

**Repositório back-end:** https://github.com/anderchenko1993/api-veiculos

### Dependências

O front-end foi desenvolvido utilizando o Angular versão 11.1.2, e o back-end Nodejs versão 12.4.1. Ambos utilizam bibliotecas de terceiros, e será necessário baixar as suas dependências através do comando `npm install`.

### Banco de dados

O projeto utiliza o banco de dados MongoDB que está hospedado na cloud pelo serviço [MongoDB Atlas].

A string de conexão já se encontra no código fonte no back-end, não sendo necessário nenhuma ação para configuração.


## Uso

### Front-end

Execute o comando `ng serve` para subir o servidor do Angular. Navegue para `http://localhost:4200/`. 

### Back-end

Execute o comando `npm start` para subir o servidor do Node.js. O servidor rodará no endereço `http://localhost:3000`.


 [MongoDB Atlas]: <https://cloud.mongodb.com>

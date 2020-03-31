const express = require('express');
const cors = require('cors');
const { errors }= require('celebrate');

const routes = require('./routes');

const app = express();

app.use(cors())
app.use(express.json()); // usar para chamar requisiçoes body em formato json
app.use(routes);
app.use(errors());
/**
 * Rota/Recurso
 */

 /**
  * Metodos http:
  * 
  * GET: Buscar informação no back-end
  * POST: Criar informação no back-end
  * PUT: Alterar informação no back-end
  * DELETE: Deletar informação no back-end
  */

  /**
   * Tipos de parametros
   * 
   * Query params: Parametros nomeados enviados na rota apos "?". Exemplo: /users?name=Carlos. (Filtros,paginação)
   * Route params: Parametros utilizados para identificar recursos. Exemplo: /users/:id no codigo e users/'1' na busca.
   * Request Body: Corpo da Requisição, utilizado para criar ou alterar recursos
   */

   
/*app.post('/users', (request, response) =>{
    const params = request.query;  EXEMPLO DE REQUISIÇÃO MODO QUERY*/

/*app.get('/users/:id', (request, response)=>{
    const params = request.params; EXEMPLO DE REQUISIÇÃO MODO ROUT*/

/*app.post('/users', (request, response)=>{
    const body = request.body;

    console.log(body);*/
/*app.post('/users', (request, response)=>{
    const body = request.body;
    
    console.log(body);
    

    return response.json ({
        evento: 'Semana OmniStack 11.0',
        aluno: 'Logan'
    });

});*/

module.exports = app;

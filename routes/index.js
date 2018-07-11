var express = require('express');
var router = express.Router();
const client = require("./../config/conection")
/* GET home page. */

router.get('/', function (req, res, next) {
  const query = 'SELECT * FROM task';
  client
    .query(query)
    .then(result => {
      res.status(200).send({ row: result.rows });
    })
    .catch(err => {
      console.log(err);
      throw err;
    });
});

router.post('/addTask', function (req, res, next) {
  //const query = 'SELECT * FROM task';
  const query = 'INSERT INTO public.task(title, author, description, priority) VALUES (\''+req.body.title+'\',\''+req.body.author+'\',\''+req.body.description+'\',\''+req.body.priority+'\');';
  console.log(query);
  client
  .query(query)
  .then(result=>{
    res.status(200).send({ok:"0"})
  })
  .catch(err =>{
    console.log(err);
    throw err;
  })
});

router.post('/deleteTask', function (req, res, next) {
  //const query = 'SELECT * FROM task';
  console.log(req.body);
  const query = 'DELETE FROM public.task WHERE id = '+req.body.id+';';
  console.log(query);
  client
  .query(query)
  .then(result=>{
    res.status(200).send({ok:"0"})
  })
  .catch(err =>{
    console.log(err);
    throw err;
  })
});


module.exports = router;

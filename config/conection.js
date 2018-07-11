var pg = require("pg");
//var db = pgp("postgres://localhost:50639/postgres");
//var connectionString = 'postgres://localhost/postgres';
/*var connectionString = 'postgres://postgres:123@localhost:5432/postgres';
var client = new pg.Client(connectionString);
await client.connect((err, client, done)=> {
    if (err) {
        console.error(err);
    }else{
            console.log("conectado")
        }
        // should return response error like 
    });

module.exports =client;*/

var connectionString = {
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: '123',
  port: 5432,
};

var client = new pg.Pool(connectionString);
client.connect(err => {
    if (err) {
        throw err;
    }
});

module.exports = client;
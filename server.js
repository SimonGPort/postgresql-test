// Voir tutoriel de Traversy Media https://www.youtube.com/watch?v=TueoFdaJV2g&list=PLillGF-RfqbaEmlPcX5e_ejaK7Y5MydkW&index=8

let express = require('express')
let app = express()
let {Pool}=require('pg')

let pool=new Pool()

//DB conect string
// let connect="postgres://username:password@localhost/databaseName";
let connect="postgres://postgresql-test:Maruchi1@localhost/postgresql-test";

// return res.send(JSON.stringify("hello world" ));
app.get('/',function(req,res){
    pool.connect(connect,function(err,client,done){
if(err){
    return console.error('error fetching client fro pool',err)
}
client.query('SELECT * FROM recipes',function(err,result){
if(err){return console.error('error running query',err)}
res.render('index',{recipes:result.rows})
})
  })
})


























app.listen(4000, '0.0.0.0', () => { console.log("Server running on port 4000") })
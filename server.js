// Voir tutoriel de Traversy Media https://www.youtube.com/watch?v=TueoFdaJV2g&list=PLillGF-RfqbaEmlPcX5e_ejaK7Y5MydkW&index=8

let express = require('express')
let app = express()
let {Pool,Client}=require('pg')


//DB conect string
// let connectionString="postgres://username:password@localhost:PORT/:Maruchi1@localhost/databaseName";
let connectionString="postgres://postgresql-test:Maruchi1@localhost:5432/postgresql-test";

let client=new Client({
    connectionString:connectionString
})

client.connect()

// client.query('SELECT * from recipes',(err,res)=>{
//     console.log(err,res)
    // Dans la res, il y a rows qui contient les valeurs de la DB
//     client.end()
// })

app.get('/',function(req,res){
let rows=[]

client.query('SELECT * from recipes',(err,res)=>{
    rows=res
    client.end()
})
console.log("rows",rows)
res.send(JSON.stringify({recipes:rows}));
})





app.listen(4000, '0.0.0.0', () => { console.log("Server running on port 4000") })
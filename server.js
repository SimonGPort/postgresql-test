// Voir tutoriel de Traversy Media https://www.youtube.com/watch?v=TueoFdaJV2g&list=PLillGF-RfqbaEmlPcX5e_ejaK7Y5MydkW&index=8

let express = require('express')
let app = express()
let {Pool,Client}=require('pg')


//DB conect string
// let connectionString="postgres://username:password@localhost:PORT/:Maruchi1@localhost/databaseName";
// Le port par default de pgAdmin est 5432
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

app.get('/', (req,res)=>{

client.query('SELECT * from recipes',(err,DBres)=>{
    console.log('DBres',DBres)
    let rows=[]
    rows=DBres.rows
    client.end()

    console.log("rows",rows)
    res.send(JSON.stringify({recipes:rows}))
})
})


//devrait etre un POST, mais je mets un GET pour pouvoir l'activer a partir d'une page
app.get('/add',function(req,res){    
    client.query('INSERT INTO recipes (name,ingredients,directions) VALUES ($1,$2,$3)',["C", "Lorem ipsum", "Lorem ipsum"],
    (err,DBres)=>{console.log(DBres)})

//le type de name est character, le type de ingredients et directions est text
    // res.redirect('/')
    res.send(JSON.stringify("success"));
    })

    

    //devrait etre un POST, mais je mets un GET pour pouvoir l'activer a partir d'une page
app.get('/delete',function(req,res){    
    client.query('DELETE FROM recipes WHERE id = $1',[1],
    (err,DBres)=>{console.log(DBres)})

//le type de name est character, le type de ingredients et directions est text
    // res.redirect('/')
    res.send(JSON.stringify("success"));
    })



        //devrait etre un POST, mais je mets un GET pour pouvoir l'activer a partir d'une page
app.get('/update',function(req,res){    
    client.query('UPDATE recipes SET name=$1, ingredients=$2, directions=$3 WHERE id=$4',['D','editIncredient','editDirection',2],
    (err,DBres)=>{console.log(DBres)})

//le type de name est character, le type de ingredients et directions est text
    // res.redirect('/')
    res.send(JSON.stringify("success"));
    })





app.listen(4000, '0.0.0.0', () => { console.log("Server running on port 4000") })
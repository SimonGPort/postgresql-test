let express = require('express')
let app = express()
let pg=require('pg')

// return res.send(JSON.stringify("hello world" ));
app.get('/',function(req,res){
  pg.connect(connect,function(err,client,done){
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
let express = require('express')
let app = express()



app.get('/',function(req,res){
    console.log('TEST')
})


























app.listen(4000, '0.0.0.0', () => { console.log("Server running on port 4000") })
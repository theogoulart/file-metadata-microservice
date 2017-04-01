var express = require("express")
var path = require("path")
var app = express()

app.use(express.static('view'))

app.get('/',function(req, res){
    res.sendFile(path.join(__dirname+'/view/index.html'))
})

.listen(process.env.PORT || 8080)
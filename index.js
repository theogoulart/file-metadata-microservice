var express = require("express")
var multer  = require("multer")
var path    = require("path")

var app = express()
var upload = multer({storage: multer.memoryStorage()})

app.use(express.static('view'))

app.post('/', upload.single("file"), function(req, res){
    
    var result = {}
    result.size = req.file.size
    
    res.status(200).send(result)
})

app.get('/',function(req, res){
    res.sendFile(path.join(__dirname+'/view/index.html'))
})

.listen(process.env.PORT || 8080)
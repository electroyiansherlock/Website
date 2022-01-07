var express = require('express') ;
var app = express() ;
var mongoose = require('mongoose') ;
var bodyParser = require('body-parser') ;

mongoose.connect('mongodb://localhost:27017/Food') ;
mongoose.Promise = global.Promise ;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true})) ;

const schema = new mongoose.Schema({
    fname : String, 
    address : String,
    email : String, 
    phone :  Number
})

var foodDelivery = mongoose.model('foodDelivery', schema) ;

app.get('', (req, res) => {
    res.sendFile(__dirname + '\\static' + '/index.html') ;
})

app.post('/addname', (req, res) => {
    const myData = new foodDelivery(req.body) ;

    console.log(req.body.address) ;
    console.log(req.body.email) ;
    console.log(req.body.fname) ;
    console.log(req.body.phone) ;

    myData.save()
    .then(item => {
        res.send("item saved to database");
      })
      .catch(err => {
        res.status(400).send("unable to save to database");
      });
})

const port = 9000 ;

app.use(express.static(__dirname + '\\static')) ;

app.listen(port, () => {
    console.log(`The app is running on port : ${port}`) ;
})


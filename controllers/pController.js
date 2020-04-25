var bodyParser = require('body-parser');
var urlEncoded = bodyParser.urlencoded({extended:false});
var $ = require('jquery');
const fetch = require('node-fetch');
url = 'https://api.covid19india.org/data.json';

module.exports = function(app){

app.get('/',function(req,res){
 res.render('home');

});

}


// fetch(url)
// .then(res => console.log(res.url))//response type
// .then(data => res.render('home',{data : data})); 
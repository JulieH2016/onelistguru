const express = require('express');
const bodyParser = require('body-parser');
const logger= require('morgan');

const app = express();



app.use(logger('dev'));
app.use(bodyParser.urlencoded({
	extended:false
}));

app.use(bodyParser.json());



var port = process.env.PORT || 4000;


app.use(express.static(__dirname + "/app"));


app.listen(port, function(){
	console.log('Hey app is on ' + port);
});

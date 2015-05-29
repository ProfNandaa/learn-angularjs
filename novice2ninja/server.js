var express = require('express');

var app = express.createServer();


app.configure(function(){
	app.use(express.bodyParser());
	app.set('views',__dirname + '/public/views');
	app.set('view engine','ejs');
	app.use(express.static(__dirname + '/public'));
});

app.set('view options',{
	layout: false
});

app.get('/test', function(req,res){
	res.render('test');
});


app.listen(3035,function(){
	console.log("Express server listening on port 3035");
});
var express = require('express');

var app = express.createServer(),
	counter = 0;;


app.configure(function(){
	app.use(express.bodyParser());
	app.set('views',__dirname + '/public/views');
	app.set('view engine','ejs');
	app.use(express.static(__dirname + '/public'));
});

app.set('view options',{
	layout: false
});

app.get('/', function(req,res){
	res.render('routes');
});

app.get('/test', function(req,res){
	res.render('test');
});

app.get('/api', function(req,res){
	counter++;
	var test = {name:'Nandaa',year:2015,counter:counter};
	res.json(test);
});

app.get('/p/:page',function(req,res){
	res.render(req.params.page);
});


app.listen(3035,function(){
	console.log("Express server listening on port 3035");
});
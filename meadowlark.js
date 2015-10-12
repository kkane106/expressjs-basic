var express = require('express');

var app = express();

// "virtual fortune cookie"
var fortunes = [ "Conquer fears",
                 "Rivers need springs",
                 "Do not fear the unknown",
                 "Pleasant surprises await",
                 "Keep it simple stupid"
               ];

// Configure express-handlebars as template editor
var handlebars = require('express-handlebars').create({ defaultLayout:'main' });
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.set('port', process.env.PORT || 3000);

app.use(express.static(__dirname + '/public'));

app.get('/', function(req,res) {
  res.render('home');
});

app.get('/about', function(req,res) {
  var randomFortune =
    fortunes[Math.floor(Math.random() * fortunes.length)];
  res.render('about', { fortune: randomFortune });
});

//404
app.use(function(req,res) {
  res.status(404);
  res.render('404');
});

//500 page
app.use(function(err,req,res,next) {
  console.error(err.stack);
  res.status(500);
  res.render('500');
});

app.listen(app.get('port'), function() {
  console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.');
})


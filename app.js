var express = require('express');
var ejs = require('ejs');
var app = express();
var port = process.env.PORT || 3000;

const path = require('path');
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json());

app.use('/css', express.static(path.join(__dirname, 'public', 'css')));
app.use('/js', express.static(path.join(__dirname, 'public', 'js')));
app.use('/vendor', express.static(path.join(__dirname, 'public', 'vendor')));
app.use('/images', express.static(path.join(__dirname, 'public', 'images')));

app.set('view engine', 'ejs');

// Page d'acceuil
app.get('/', function(req, res){
//	var a= render("home");
	ejs.renderFile("views/home.ejs", [], null, function(err, html){
	    // str => Rendered HTML string
		if (err) {
			console.log(err);
			res.sendStatus(500);
		}
		else {
			console.log(html);
			res.end(html);
		}
	});
});

// Demarer une partie
app.get('/start', function(req, res){
//	var a= render("home");
	ejs.renderFile("views/part1.ejs", [], null, function(err, html){
	    // str => Rendered HTML string
		if (err) {
			console.log(err);
			res.sendStatus(500);
		}
		else {
			console.log(html);
			res.end(html);
		}
	});
});

// Valider la partie 1
app.post('/rep_form', function(req,res){
	console.log("post rep_form");
	console.log(req.body);
	if (req.body.reponse == "bonne reponse"){
		ejs.renderFile("views/part2.ejs", [], null, function(err, html){
				// str => Rendered HTML string
			if (err) {
				console.log(err);
				res.sendStatus(500);
			}
			else {
				console.log(html);
				console.log("bonne réponse");
				res.end(html);
			}
		});
	} else {
		ejs.renderFile("views/part1.ejs", [], null, function(err, html){
				// str => Rendered HTML string
			if (err) {
				console.log(err);
				res.sendStatus(500);
			}
			else {
				console.log(html);
				console.log("bonne réponse");
				res.end(html);
			}
		});
	};
});


app.get('/monsiteperso', function(req, res){
//	var a= render("home");
	ejs.renderFile("views/part2.ejs", [], null, function(err, html){
	    // str => Rendered HTML string
		if (err) {
			console.log(err);
			res.sendStatus(500);
		}
		else {
			console.log(html);
			res.end(html);
		}
	});
});


// Valider la partie 2
app.post('/login', function(req,res){
	if (req.body.username == "admin" && req.body.password == "password"){
		res.json({success : true,
							id: 'v-pills-settings-tab',
							head: "<a class='nav-link' id='v-pills-settings-tab' data-toggle='pill' href='#v-pills-settings' role='tab' aria-controls='v-pills-settings' aria-selected='false'>Page 3</a>",
							content: "<div class='tab-pane fade' id='v-pills-settings' role='tabpanel' aria-labelledby='v-pills-settings-tab'> <iframe src='https://lockee.fr/o/0jTj7bGd?noft' height='500' width='350' frameborder='0' ></iframe></div>"
		});
	} else if (req.body.username == "admin" && req.body.password == "end") {
	ejs.renderFile("views/end.ejs", [], null, function(err, html){
			if (err) {
				console.log(err);
				res.sendStatus(500);
			}
			else {
				console.log(html);
				res.json({success : true,
									id: 'v-pills-end-tab',
									head: "<a class='nav-link' id='v-pills-end-tab' data-toggle='pill' href='#v-pills-end' role='tab' aria-controls='v-pills-end' aria-selected='false'>Page finale</a>",
									content: html// "<div class='tab-pane fade' id='v-pills-end' role='tabpanel' aria-labelledby='v-pills-end-tab'><p>The end</p></div>"
				});
			}
		});

	} else {
		res.json({success : false});
	};
});



/*app.get('/visualisation', function(req, res){
	res.render("visualisation")
});
*/

/*app.post('/login', function(req,res){
	if (req.body.username == "Eclair" && req.body.password == "password"){
		res.json({success : true});
	} else {
		res.json({success : false});
	};
});
*/

app.listen(port);

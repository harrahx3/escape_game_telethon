var express = require('express');
var ejs = require('ejs');
var app = express();
var port = process.env.PORT || 5000;
var xss = require('xss');
var session = require('express-session');
const fs = require('fs');
var db_mdp;
var db_usr;
var mysql = require('mysql'); //package mysql
var connection;
//var url = require(‘url‘);


const path = require('path');
__dirname = path.resolve();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json());

app.use(session({secret:'XASDASDA'}));
var ssn ;

app.use('/css', express.static(path.join(__dirname, 'public', 'css')));
app.use('/js', express.static(path.join(__dirname, 'public', 'js')));
app.use('/vendor', express.static(path.join(__dirname, 'public', 'vendor')));
app.use('/images', express.static(path.join(__dirname, 'public', 'images')));

app.set('view engine', 'ejs');

// Page d'acceuil
app.get('/', function(req, res){
	ssn = req.session;
	//	var a= render("home");
	var msg;
	console.log(req.param);
	if (req.param('alreadyuse')) {
		msg = "Error: il ya déjà une partie enregistrée sous ce nom";
	}
	console.log("render home with msg= " + msg);
	ejs.renderFile("views/home.ejs", {msg: msg}, null, function(err, html){
		// str => Rendered HTML string
		if (err) {
			console.log(err);
			res.sendStatus(500);
		}
		else {
			//console.log(html);
			console.log("get /");
			res.end(html);
		}
	});
});

/*app.get('/dialogue_debut', function(req, res){
	ssn = req.session;
	//	var a= render("home");
	var msg;
	console.log(req.param);
	if (req.param('alreadyuse')) {
		msg = "Error: il ya déjà une partie enregistrée sous ce nom";
	}
	console.log("render home with msg= " + msg);
	ejs.renderFile("views/home.ejs", {msg: msg}, null, function(err, html){
		// str => Rendered HTML string
		if (err) {
			console.log(err);
			res.sendStatus(500);
		}
		else {
			//console.log(html);
			console.log("get /");
			res.end(html);
		}
	});
});*/

// Demarer une partie
app.post('/start', function(req, res){
	ssn = req.session;
	//	var a= render("home");
	console.log("start");
	console.log(req.body);
	console.log(req.body.nick);
	if (ssn.nick) {
		//req.body.nick = ssn.nick;
		console.log("nick exist");
	}
	else {
		console.log("nick false");
	}
	var nick = xss(req.body.nick);
	console.log(nick);
	ssn.nick = nick;
	if (!ssn.nick || ssn.nick=="") {
		res.redirect(302, '/');
	}
	else {
		ejs.renderFile("views/dialogue_debut.ejs", [], null, function(err, html){
			// html => Rendered HTML string
			if (err) {
				console.log(err);
				res.sendStatus(500);
			}
			else {
				//connection.connect();
				//	console.log(html);
				connection.query('SELECT * FROM games WHERE nick=?', [xss(ssn.nick)], function(e, r) {
					if (e) {
						console.log("Erreur base de données: " + e);
						res.sendStatus(500);
					} else if (r.length==0){
							console.log("start page");
							connection.query('INSERT INTO games (nick, start_time, end_time, time) VALUES (?, NOW(), NOW(), 0)', [xss(ssn.nick)], function(error, results){
								if (error) {
									console.log("Erreur base de données: " + error);
									res.sendStatus(500);
								} else {
									console.log("game add to db");
									res.end(html);
								}
							});
					} else {
						res.redirect(302, '/?alreadyuse=true');
						//res.end("Erreur: Il y a déjà une partie enregistrée sous ce nom");
					}
				})
			}
		});
	}
});

app.get('/part1', function(req, res){
	ssn = req.session;
	ejs.renderFile("views/part1.ejs", [], null, function(err, html){
		// html => Rendered HTML string
		if (err) {
			console.log(err);
			res.sendStatus(500);
		}
		else {
			res.end(html);
		}

	})
})

// Valider la partie 1
app.post('/rep_form', function(req,res){
	ssn = req.session;
	console.log("post rep_form");
	console.log(req.body);
	req.body.reponse = xss(req.body.reponse);
	if (req.body.reponse == "bonne reponse"){
		res.redirect(302, '/siteperso');
		/*ejs.renderFile("views/part2.ejs", [], null, function(err, html){
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
});*/
} else {
	req.body.nick = ssn.nick;
	res.redirect(307, '/start');
	//res.statusCode=302;
	//res.setHeader('Location','/start');
	//return res.end();
	}
});


// partie 2
app.get('/siteperso', function(req, res){
	ssn = req.session;
	//	var a= render("home");
	ejs.renderFile("views/part2.ejs", [], null, function(err, html){
		// str => Rendered HTML string
		if (err) {
			console.log(err);
			res.sendStatus(500);
		}
		else {
			//console.log(html);
			console.log("get /siteperso -> part2 ok");
			res.end(html);
		}
	});
});


// Valider la partie 2
app.post('/login', function(req,res){
	ssn = req.session;
	req.body.username = xss(req.body.username);
	req.body.password = xss(req.body.password);
	console.log(req.body.username);
	console.log(req.body.password);
	if (req.body.username == "admin" && req.body.password == "password"){
		res.json({success : true,
			id: 'v-pills-settings-tab',
			head: "<a class='nav-link' id='v-pills-settings-tab' data-toggle='pill' href='#v-pills-settings' role='tab' aria-controls='v-pills-settings' aria-selected='false'>Page 3</a>",
			content: "<div class='tab-pane fade' id='v-pills-settings' role='tabpanel' aria-labelledby='v-pills-settings-tab'> <iframe src='https://lockee.fr/o/0jTj7bGd?noft' height='500' width='350' frameborder='0' ></iframe></div>"
		});
	} else if (req.body.username == "admin" && req.body.password == "end") {
		console.log("end success");

		connection.query('UPDATE games SET end_time=NOW() WHERE nick=?', [xss(ssn.nick)], function(error1, results1) {
			if (error1) {
				console.log("Erreue base de donnée : " + error1);
				res.sendStatus(500);
			} else {
				console.log("update db ok");
				connection.query('SELECT nick, start_time, end_time, TIMESTAMPDIFF(MINUTE, start_time, end_time) AS duration FROM games HAVING duration>1 ORDER BY duration ASC LIMIT 10', function(error_get, results_get){
					if (error_get) {
						console.log("Erreue base de donnée : " + error_get);
						res.sendStatus(500);
					} else {
						console.log("get db ok");
						console.log(results_get);
						ejs.renderFile("views/end.ejs", {data: results_get}, function(err, html) {
							if (err) {
								console.log(err);
								res.sendStatus(500);
							} else {
								console.log("html ok");
								res.json({success : true,
									id: 'v-pills-end-tab',
									head: "<a class='nav-link' id='v-pills-end-tab' data-toggle='pill' href='#v-pills-end' role='tab' aria-controls='v-pills-end' aria-selected='false'>Page finale</a>",
									content: html// "<div class='tab-pane fade' id='v-pills-end' role='tabpanel' aria-labelledby='v-pills-end-tab'><p>The end</p></div>"
								});
							}
						});
					}
				});
			}
		});
	} else {
		res.json({success : false});
	}
})

fs.readFile("mdp", 'utf8', function(err, data){
//	console.log(err);
	db_mdp=data.split(/\r?\n/)[0];
	fs.readFile("usr", 'utf8', function (error, data_usr) {
		db_usr=data_usr.split(/\r?\n/)[0];
			console.log(db_usr + db_mdp);
		//	db_usr='hyacinthe';
		//	db_mdp='2699Cendrennes@';
		connection = mysql.createConnection({  host     : 'localhost',  user     : db_usr,  password : db_mdp,  database : 'clt'});
		connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }

  console.log('connected as id ' + connection.threadId);
});
	app.listen(port);

	})
})

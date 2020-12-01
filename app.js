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
var favicon = require('serve-favicon');
var def_posts = require("./def_posts.js");
//var url = require(‘url‘);

//var personnes = JSON.parse(fs.readFileSync('personnes.json', 'utf8'));
const https = require('https');

https.get('https://api.namefake.com/french-france', (resp) => {
  let data = '';

  // A chunk of data has been recieved.
  resp.on('data', (chunk) => {
    data += chunk;
  });

  // The whole response has been received. Print out the result.
  resp.on('end', () => {
    console.log(JSON.parse(data).explanation);
  });

}).on("error", (err) => {
  console.log("Error: " + err.message);
});

//$.get('/login', {});
function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

//httpGet("https://api.namefake.com/french-france")


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
app.use('/favicon.ico', express.static(path.join(__dirname, 'favicon.ico')));
app.use(favicon(path.join(__dirname,'public','images','favicon.ico')));
app.use('/favicon.ico', express.static('images/favicon.ico'));
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
	ejs.renderFile("views/page1.ejs", {msg: msg}, null, function(err, html){
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


//  Demarer partie
app.post('/start', function(req, res) {
	ssn = req.session;
	//	var a= render("home");
	console.log("post start");
	console.log(req.body);
	console.log(req.body.nick);
	if (xss(ssn.nick)) {
		//req.body.nick = ssn.nick;
		console.log("nick exist");
	}
	else {
		console.log("nick false");
	}
	var nick = xss(req.body.nick);
	console.log(nick);
	ssn.nick = xss(nick);
	if (!ssn.nick || ssn.nick=="") {
		res.redirect(302, '/');
	} else {
		ejs.renderFile("views/page2.ejs", [], null, function(err, html){
			// html => Rendered HTML string
			if (err) {
				console.log(err);
				res.sendStatus(500);
			}	else {
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

app.get('/page3', function(req, res) {
	ssn = req.session;
	console.log("get page3");
	ssn = req.session;
	ejs.renderFile("views/page3.ejs", {nick: xss(ssn.nick)}, null, function(err, html){
		// html => Rendered HTML string
		if (err) {
			console.log(err);
			res.sendStatus(500);
		} else {
			res.end(html);
		}
	})
})

app.post('/check_colloque', function(req,res) {
	console.log("post check_colloque");
	ssn = req.session;
	console.log("post rep_form");
	console.log(req.body);
	var lieu = xss(req.body.lieu);
	var date = xss(req.body.date);
	var nom = xss(req.body.nom);

	if ((lieu.toLowerCase()=="thaïlande" || lieu.toLowerCase()=='thailande' || lieu.toLowerCase()=="bangkok") && date=="01/01/2020") {
		//res.redirect(302, '/part1');
		var today = new Date();
		var dd = String(today.getDate()).padStart(2, '0');
		var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
		var yyyy = today.getFullYear();
		var hh = today.getHours();
		var min = today.getMinutes();

		var date = dd+"/"+mm+"/2050 "+hh+":"+min;

		ejs.renderFile('views/page3-suite.ejs', {nick: xss(ssn.nick), date: date}, function(err, html){
			if (err) {
				console.log("erreur ejs" + err);
				res.sendStatus(500);
			} else {
				res.json({success : true,
					id: 'answer1',
					content: html
				});
			}
		})

	} else {
		req.body.nick = xss(ssn.nick);
		res.redirect(302, '/page3');
		//res.statusCode=302;
		//res.setHeader('Location','/start');
		//return res.end();
	}
});

app.get('/enigme', function(req, res) {
	console.log("get enigme");
	ssn = req.session;
	ejs.renderFile("views/page4.ejs", [], null, function(err, html){
		// html => Rendered HTML string
		if (err) {
			console.log(err);
			res.sendStatus(500);
		} else {
			res.end(html);
		}
	})
})

// Valider la partie 1
app.post('/rep_form', function(req,res) {
	console.log("post rep_form");
	ssn = req.session;
	console.log("post rep_form");
	console.log(req.body);
	reponse = xss(req.body.reponse);
	if (reponse.toLowerCase() == "temps" || reponse.toLowerCase() == "le temps") {
		res.redirect(302, '/siteperso');
	} else {
		req.body.nick = xss(ssn.nick);
		res.redirect(302, '/enigme');
	}
});


// partie 2
app.get('/siteperso', function(req, res){
	console.log("get siteperso");
	ssn = req.session;
	//	var a= render("home");

var posts = def_posts.def_posts();

// var posts_2020 = JSON.parse(fs.readFileSync('posts_2020.json', 'utf8'));

ejs.renderFile("views/post.ejs", {posts: posts.posts_2019}, function(err, html_posts_2019){
	// str => Rendered HTML string
	if (err) {
		console.log(err);
		res.sendStatus(500);
	} else {
		ejs.renderFile("views/post.ejs", {posts: posts.posts_2020}, function(err, html_posts_2020){
			// str => Rendered HTML string
			if (err) {
				console.log(err);
				res.sendStatus(500);
			} else {
				//	console.log("get /siteperso -> part2 ok");
				ejs.renderFile("views/part2.ejs", {posts_2020: html_posts_2020, posts_2019: html_posts_2019}, function(err, html){
					// str => Rendered HTML string
					if (err) {
						console.log(err);
						res.sendStatus(500);
					} else {
						//console.log(html);
						console.log("get /siteperso -> part2 ok");
						res.end(html);
					}
				});
			}
		})
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
				console.log("Erreur base de donnée : " + error1);
				res.sendStatus(500);
			} else {
				console.log("update db ok");
				connection.query('SELECT nick, start_time, end_time, TIMESTAMPDIFF(MINUTE, start_time, end_time) AS duration FROM games HAVING duration>1 ORDER BY duration ASC LIMIT 20', function(error_get, results_get){
					if (error_get) {
						console.log("Erreur base de donnée : " + error_get);
						res.sendStatus(500);
					} else {
						connection.query('SELECT nick, start_time, end_time, TIMESTAMPDIFF(MINUTE, start_time, end_time) AS duration FROM games WHERE nick=? HAVING duration>1', [xss(ssn.nick)], function(error_get_current, results_get_current){
							if (error_get) {
								console.log("Erreur base de donnée : " + error_get_current);
								res.sendStatus(500);
							} else {
								var nick="?";
								var time_current="?";
								if (results_get_current.length!=0) {
									nick=xss(ssn.nick);
									time_current = xss(results_get_current[0].duration);
								}
								console.log("get db ok");
								console.log(results_get);
								ejs.renderFile("views/end.ejs", {data: results_get, nick: xss(ssn.nick), time: time_current}, function(err, html) {
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
						})
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

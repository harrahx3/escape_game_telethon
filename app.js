var express = require('express');
var ejs = require('ejs');
var app = express();
var port = process.env.PORT || 3000;

const path = require('path');
__dirname = path.resolve();
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


app.post('/login', function(req,res){
	if (req.body.username == "admin" && req.body.password == "password"){
		res.json({success : true,
							id: 'v-pills-settings-tab',
							head: "<a class='nav-link' id='v-pills-settings-tab' data-toggle='pill' href='#v-pills-settings' role='tab' aria-controls='v-pills-settings' aria-selected='false'>Page 3</a>",
							content: "<div class='tab-pane fade' id='v-pills-settings' role='tabpanel' aria-labelledby='v-pills-settings-tab'> <iframe src='https://lockee.fr/o/0jTj7bGd?noft' height='500' width='350' frameborder='0' ></iframe></div>"
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

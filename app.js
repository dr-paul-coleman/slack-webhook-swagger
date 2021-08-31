const PORT = process.env.PORT || 5000;

const express = require('express');
const path = require('path');

const app = express();

//Set up App
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));
app.use(express.static(__dirname + '/public'));

//Routes
app.get('/', function(req, res){ 

    res.render('index', {})
});

//Run
app.listen(PORT, function () {
    console.log('>>>>>>>>>>>>  Listening on port ' + PORT);
});


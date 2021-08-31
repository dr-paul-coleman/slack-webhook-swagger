const PORT = process.env.PORT || 5000;

const express = require('express');
const path = require('path');
const tiny = require('tiny-json-http')

const app = express();

//Set up App
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));
app.use(express.static(__dirname + '/public/Codey'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Routes
app.get('/', function(req, res){ 
    res.render('index', {})
});

app.post('/webhook', function(req, res){ 
    
    const body = req.body;

    // Set up Callback
    const options = {
        url: body.url,
        data: body.data,
        headers: {
            'Content-Type': 'application/json'
        }
    }

    tiny.post(options, function(err, response){
        res.end( err.message || JSON.stringify(response.body,null,2) );
    });
    
});


//Run
app.listen(PORT, function () {
    console.log('>>>>>>>>>>>>  Listening on port ' + PORT);
});


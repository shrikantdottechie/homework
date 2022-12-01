const express = require('express');
const magics = require('./models/magics.js');
// Create our express app
const app = express();
const port = process.env.PORT || 3000;
// Define a "root" route directly on app
// Tomorrow, we'll use best practice routing
app.get('/greeting', function (req, res) {
    res.send('<h1>Hello, stranger</h1>');
});

app.get('/greeting/:name', function (req, res) {
    console.log(req.params);
    console.log(req.query)
    if (req.params.name === 'Jimmy') {
        res.send(`Wow! Hello there, ${req.params.name}-${req.query.title}`);
    } else {
        res.send('Hello, ' + req.params.name + ' ' + `What's up, ` + req.params.name + '! ' + `It's so great to see you!`);
    }
});

/*app.get('/greeting/:name', function (req, res) {
    console.log(req.params);
    console.log(req.query);
    res.send(`Wow! Hello there, ${req.params.name}-${req.query.title}`)
});*/

app.get('/tip/:total/:tipPercentage', function (req, res) {
    console.log(req.params);
    res.send(`Tip amount on ${req.params.total} in percentage is: ${req.params.tipPercentage}`);
});

app.get('/magic/Will%20I%20Be%20A%20Millionaire', function (req, res) {
    res.send('<h1>Will I be a Millionaire </h1>' + `${magics[Math.floor(Math.random() * magics.length)]}`);
});
//Fibonacci

const fibonacci = (query, count = 1, last = 0) => {
    if (count < query) {
        return fibonacci(query, count + last, count);
    };
    if (count === query) {
        return true;
    }
    return false;
};
app.get('/fibonacci/:number1', function (req, res) {
    console.log(req.params);
    if (parseInt(req.params.number1) >= 0) {
        if (fibonacci(parseInt(req.params.number1))) {
            res.send('<h1>Very good. It is Fibonacci.</h1>');
        } else {
            res.send('<h1>I can tell this is not a fibonacci number.</h1>');
        }
    } else {
        res.send('<h1>Please enter valid number.</h1>');
    }
    return;
});
// Tell the app to listen on port 3000
// for HTTP requests from clients
app.listen(port, function () {
    console.log('Listening on port 3000');
});
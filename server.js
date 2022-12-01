const express = require('express');

// Create our express app
const app = express();

// Define a "root" route directly on app
// Tomorrow, we'll use best practice routing
app.get('/greeting', function (req, res) {
  res.send('<h1>Hello, stranger</h1>');
});

/*app.get('/greeting/:name', function (req, res) {
    console.log(req.params);
    res.send('Hello, ' + req.params.name + ' ' + `What's up, `+ req.params.name + '! ' + `It's so great to see you!`);
  });*/
 
   app.get('/greeting/:name', function (req, res) {
        console.log(req.params);
        console.log(req.query);
        res.send(`Wow! Hello there, ${req.params.name}-${req.query.title}`)});
       

// Tell the app to listen on port 3000
// for HTTP requests from clients
app.listen(3000, function () {
  console.log('Listening on port 3000');
});
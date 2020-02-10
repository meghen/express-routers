//require
const express = require('express');
const bodyParser = require('body-parser');
const productRouter = require('./routes/product.router');

//globals
const app = express();
const PORT = 5000;

//use
// app.use(express.static('server'));
// NOTE-- so we only use express in the code above to serve up static files (our HTML, basically), but since we don't have that in this assignment, we don't need the line above
//BUT body-parser is needed to POST, even without a front end
app.use(bodyParser.urlencoded({extended: true}));
app.use('/product', productRouter);

//server
app.listen(PORT, ()=>{
    console.log('listening on PORT', PORT); 
});
//  NOTE ON SERVER--
// you could also write it as:
// app.listen(PORT);
// the arrow function only serves to tell us in the terminal that our port is open
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// connect to mongodb
mongoose.connect('mongodb://localhost/promedical');
mongoose.Promise = global.Promise;

const app = express();
const port = process.env.PORT || 5000;

// parsing data that was received
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// initialize routes
app.use('/api', require('./routes/api'));

// error handling
app.use((err, req, res, next)=>{
	res.status(422).send({error: err.message});
});


app.listen(port, () => {
	console.log(`Listening on port ${port}`)
});



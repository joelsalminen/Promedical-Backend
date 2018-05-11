const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// connect to mongodb
mongoose.connect('mongodb://localhost/promedical');
mongoose.Promise = global.Promise;

const app = express();
const port = process.env.PORT || 5000;

// parsing data that was received
app.use(bodyParser.urlencoded());

app.use('/api', require('./routes/api'));



app.listen(port, () => {
	console.log(`Listening on port ${port}`)
});



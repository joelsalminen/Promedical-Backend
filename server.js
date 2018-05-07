const express = require('express');

const app = express();
const port = process.env.PORT || 5000;

app.use('/api', require('./routes/api'));



app.listen(port, () => {
	console.log(`Listening on port ${port}`)
});



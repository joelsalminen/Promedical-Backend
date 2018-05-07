const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create item schema and model
const ItemSchema = new Schema({
	name: {
		type: String, 
		required: [true, 'Name field is required']
	},
	serial: {
		type: Number,
		required: [true, 'Serial number is required']
	},
	location: {
		type: String
	},
	expiration: {
		type: Date
	}

});

const Item = mongoose.model('item', ItemSchema);

module.exports = Item;
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// // create item schema and model
const DocumentSchema = new Schema({
	customer: {
		type: String, 
		required: [true, 'Customer field is required']
	},
	lender: {
		type: String,
		required: [true, 'Lender field is required']
	},
	contactInfo: {
		type: String,
		required: [true, 'Customer contact info is required']
	},
	startDate: {
		type: String,
		required: [true, 'Starting date field is required']
	},
	returnDate: {
		type: String, 
		required: [true, 'Return date field is required']
	},
	lendType: {
		type: String,
		required: [true, 'Lend type field is required']
	},
	price: {
		type: Number
	},
	itemName: {
		type: String
	}
});

const Document = mongoose.model('document', DocumentSchema);
module.exports = Document;
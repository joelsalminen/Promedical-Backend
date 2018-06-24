const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create lending schema and model
const LendingSchema = new Schema({

	lender: {
		type: String,
		required: [true, 'Lender field is required']
	},
	customer: {
		type: Object,
		required: [true, 'Customer object is required'],
		name: {
			type: String,
			required: [true, 'Customer name field is required']
		},
		contactInfo: {
			type: String
		}
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

	item: {
		name: {
			type: String,
			required: [true, 'Item name field is required']
		},
		serial: {
			type: Number,
			required: [true, 'Serial field is required']
		},
		_id: {
			type: String, 
			required: [true, 'Item id field is required']
		}

	}


});

const Lending = mongoose.model('lending', LendingSchema);

module.exports = Lending;
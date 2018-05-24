const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create Reservation schema and model
const ReservationSchema = new Schema({
	customer: {
		type: String,
		required: [true, 'Customer field is required']
	},
	startDate: {
		type: String,
		required: [true, 'Starting date field is required']
	},
	returnDate: {
		type: String, 
		required: [true, 'Return date field is required']
	},
	item: {
		required: [true, 'Item is required'],
		name: {
			type: String
		},
		serial: {
			type: Number
		},
		_id:{
			type: String
		}
	}
});

const Reservation = mongoose.model('item', ReservationSchema);
module.exports = Reservation;
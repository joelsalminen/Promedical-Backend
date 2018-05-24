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

const Reservation = mongoose.model('reservation', ReservationSchema);
module.exports = Reservation;
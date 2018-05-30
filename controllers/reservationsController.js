const Reservation = require('../models/reservation');

module.exports = {
	getReservations: async(req, res, next) =>{
		Reservation.find({}).then((items)=>{
			res.send(items);
		});
	},
	postReservation: async(req, res, next) =>{
		/* parse data */
		const data = {
			customer: req.body.customer,
			contactInfo: req.body.contactInfo,
			startDate: req.body.startDate,
			returnDate: req.body.returnDate,
			item: {
				_id: req.body.itemId,
				serial: req.body.itemSerial,
				name: req.body.itemName
			}
		}
		Reservation.create(data).then((item)=>{
			res.send(data);
		}).catch(next);;
	},
	deleteReservation: async(req, res, next) =>{
		Reservation.findByIdAndRemove({_id: req.params.id}).then((item)=>{
				res.send(item);
			}).catch(next);
	}
}

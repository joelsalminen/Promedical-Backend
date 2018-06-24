const Lending = require('../models/lending'); // lending schema

module.exports = {
	getLendings: async (req, res, next)=>{
		Lending.find({})
			.then((items)=>{
				res.send(items);
			}).catch(next);
	},
	postLending: async (req, res, next)=>{
		/* parse data */
		const data = {
			lender: req.body.lender,
			customer: req.body.customer,
			contactInfo: req.body.contactInfo,
			startDate: req.body.startDate,
			returnDate: req.body.returnDate,
			lendType: req.body.lendType,
			price: req.body.price,
			item: {
				_id: req.body.itemId,
				serial: req.body.itemSerial,
				name: req.body.itemName
			}
		};
		/* store said data in database */
		Lending.create(data).then((lending)=>{
			res.send(data);
		}).catch(next);
	},
	deleteLending: async (req, res, next)=>{
		Lending.findByIdAndRemove({_id: req.params.id}).then((item)=>{
			res.send(item);
		}).catch(next);
	}
}


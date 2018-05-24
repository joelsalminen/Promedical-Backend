const express = require('express');
const Item = require('../models/item'); // item schema
const Lending = require('../models/lending'); // lending schema

/* setting up the router */
const router = express.Router();



/* /api/items routes */
/* get items */
router.get('/items', (req, res)=>{
	Item.find({}).then((items)=>{
		res.send(items);
	});
});

/* post items */
router.post('/items', (req, res, next)=>{
	Item.create(req.body).then((item)=>{
		res.send(item);
	}).catch(next);
});

/* put items */
router.put('/items/:id', (req, res, next)=>{
	Item.findByIdAndUpdate({_id: req.params.id}, req.body, {new: true}).then((item)=>{
		res.send(item);
	}).catch(next);
});

/* delete items */
router.delete('/items/:id', (req, res, next)=>{
	Item.findByIdAndRemove({_id: req.params.id}).then((item)=>{
		res.send(item);
	}).catch(next);
});



/* /api/lendings routes */
/* get lendings*/
router.get('/lendings', (req, res, next)=>{
	Lending.find({}).then((items)=>{
		res.send(items);
	}).catch(next);
});


/* post lendings */
router.post('/lendings', (req, res, next)=>{
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
	
});



/* delete lendings */
router.delete('/lendings/:id', (req, res, next)=>{
	Lending.findByIdAndRemove({_id: req.params.id}).then((item)=>{
		res.send(item);
	}).catch(next);
});


/* reservation routes */
/* get reservation */
router.get('/reservations/', (req, res, next)=>{
	Reservation.find({}).then((items)=>{
		res.send(items);
	});
});


module.exports = router;



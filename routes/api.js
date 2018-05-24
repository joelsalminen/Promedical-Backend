const express = require('express');
const Item = require('../models/item'); // item schema
const Lending = require('../models/lending'); // lending schema

// setting up the router
const router = express.Router();



// /api/items routes
router.get('/items', (req, res)=>{
	Item.find({}).then((items)=>{
		res.send(items);
	});
});


router.post('/items', (req, res, next)=>{
	Item.create(req.body).then((item)=>{
		res.send(item);
	}).catch(next);
});


router.put('/items/:id', (req, res, next)=>{
	Item.findByIdAndUpdate({_id: req.params.id}, req.body, {new: true}).then((item)=>{
		res.send(item);
	}).catch(next);
});


router.delete('/items/:id', (req, res, next)=>{
	Item.findByIdAndRemove({_id: req.params.id}).then((item)=>{
		res.send(item);
	}).catch(next);
});



// /api/lendings routes
router.post('/lendings', (req, res, next)=>{
//	console.log(req.body);
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
	//console.log(data);
	Lending.create(data).then((lending)=>{
	res.send(data);
	}).catch(next);
	
});


router.delete('/lendings/:id', (req, res, next)=>{
	Lending.findByIdAndRemove({_id: req.params.id}).then((item)=>{
		res.send(item);
	}).catch(next);
});



module.exports = router;



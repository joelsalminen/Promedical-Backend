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
	console.log(req.body);
	res.send(req.body);
	// Lending.create(req.body).then((lending)=>{
	// 	res.send(req.body);
	// }).catch(next);
	
});




module.exports = router;



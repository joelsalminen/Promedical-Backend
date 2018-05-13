const express = require('express');
const Item = require('../models/item'); // item schema

// setting up the router
const router = express.Router();

router.get('/items', (req, res)=>{
	Item.find({}).then((items)=>{
		res.send(items);
	});
});

router.post('/items', (req, res)=>{
	Item.create(req.body).then((item)=>{
		res.send(item);
	});
	

});

router.post('/lendings', (req, res)=>{
	console.log(req.body);
	res.send(req.body);
});


router.put('/items/:id', (req, res)=>{
	Item.findByIdAndUpdate({_id: req.params.id}, req.body, {new: true}).then((item)=>{
		res.send(item);
	});

});


router.delete('/items/:id', (req, res)=>{
	Item.findByIdAndRemove({_id: req.params.id}).then((item)=>{
		res.send(item);
	});
});


module.exports = router;



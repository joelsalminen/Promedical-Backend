const express = require('express');
/* setting up the router */
const router = require('express-promise-router')();


const Lending = require('../models/lending'); // lending schema
const Reservation = require('../models/reservation');
const UsersController = require('../controllers/usersController');
const ItemsController = require('../controllers/itemsController');



/* Login routes */
router.route('/login')
	.post(UsersController.login);

router.route('/signup')
	.post(UsersController.signup);




/* Items routes */
router.route('/items')
	.get(ItemsController.getItems);

/* post items */
router.route('/items')
	.post(ItemsController.postItems);

/* put items */
router.route('/items/:id')
	.put(ItemsController.putItem);

/* delete items */
router.route('/items/:id')
	.delete(ItemsController.deleteItem);


/* Lendings routes */
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


/* Reservation routes */
/* get reservation */
router.get('/reservations/', (req, res, next)=>{
	Reservation.find({}).then((items)=>{
		res.send(items);
	});
});

/* post reservation */
router.post('/reservations', (req, res, next)=>{
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
	});
});


/* delete reservation */
router.delete('/reservations/:id', (req, res, next)=>{
	Reservation.findByIdAndRemove({_id: req.params.id}).then((item)=>{
		res.send(item);
	}).catch(next);
});


module.exports = router;



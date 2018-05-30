const express = require('express');
/* setting up the router */
const router = require('express-promise-router')();



const UsersController = require('../controllers/usersController');
const ItemsController = require('../controllers/itemsController');
const ReservationController = require('../controllers/reservationsController');
const LendingsController = require('../controllers/lendingsController');

/* Login routes */
router.route('/login')
	.post(UsersController.login);

router.route('/signup')
	.post(UsersController.signup);


/* Items routes */
router.route('/items')
	.get(ItemsController.getItems);

router.route('/items')
	.post(ItemsController.postItem);

router.route('/items/:id')
	.put(ItemsController.putItem);

router.route('/items/:id')
	.delete(ItemsController.deleteItem);


/* Lendings routes */
router.route('/lendings')
	.get(LendingsController.getLendings);



/* post lendings */
router.route('/lendings')
	.post(LendingsController.postLending);



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



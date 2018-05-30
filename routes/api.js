const express = require('express');
/* setting up the router */
const router = require('express-promise-router')();

const {validateBody ,schemas} = require('../helpers/routeHelpers')
const UsersController = require('../controllers/usersController');
const ItemsController = require('../controllers/itemsController');
const ReservationController = require('../controllers/reservationsController');
const LendingsController = require('../controllers/lendingsController');

/* Login routes */
router.route('/login')
	.post(validateBody(schemas.authSchema), UsersController.login);

router.route('/signup')
	.post(validateBody(schemas.authSchema), UsersController.signup);


/* Items routes */
router.route('/items')
	.get(ItemsController.getItems);

router.route('/items')
	.post(validateBody(schemas.itemSchema), ItemsController.postItem);

router.route('/items/:id')
	.put(ItemsController.putItem);

router.route('/items/:id')
	.delete(ItemsController.deleteItem);


/* Lendings routes */
router.route('/lendings')
	.get(LendingsController.getLendings);

router.route('/lendings')
	.post(LendingsController.postLending);

router.route('/lendings/:id')
	.delete(LendingsController.deleteLending);


/* Reservation routes */
router.route('/reservations/')
	.get(ReservationController.getReservations);

router.route('/reservations')
	.post(ReservationController.postReservation);

router.route('/reservations/:id')
	.delete(ReservationController.deleteReservation);

module.exports = router;



const express = require('express');
/* setting up the router */
const router = require('express-promise-router')();
const passport = require('passport');
const passportConf = require('../passport');

const {validateBody ,schemas} = require('../helpers/routeHelpers')
const UsersController = require('../controllers/usersController');
const ItemsController = require('../controllers/itemsController');
const ReservationController = require('../controllers/reservationsController');
const LendingsController = require('../controllers/lendingsController');
const passPortJWT = passport.authenticate('jwt', {session: false});

/* Login routes */
router.route('/login')
	.post(validateBody(schemas.authSchema), passport.authenticate('local', {session: false}), UsersController.login);

router.route('/signup')
	.post(validateBody(schemas.authSchema), UsersController.signup);


/* Items routes */
router.route('/items')
	.get(passPortJWT, ItemsController.getItems);

router.route('/items')
	.post(passPortJWT, validateBody(schemas.itemSchema), ItemsController.postItem);

router.route('/items/:id')
	.put(passPortJWT, ItemsController.putItem);

router.route('/items/:id')
	.delete(passPortJWT, ItemsController.deleteItem);


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



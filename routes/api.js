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
const passportJWT = passport.authenticate('jwt', {session: false});
const passportSignIn = passport.authenticate('local', {session: false})


/* Login routes */
router.route('/login')
	.post(validateBody(schemas.loginSchema), passportSignIn, UsersController.login);

router.route('/signup')
	.post(validateBody(schemas.signupSchema), UsersController.signup);


/* Items routes */
router.route('/items')
	.get(passportJWT, ItemsController.getItems);

router.route('/items')
	.post(passportJWT, validateBody(schemas.itemSchema), ItemsController.postItem);

router.route('/items/:id')
	.put(passportJWT, ItemsController.putItem);

router.route('/items/:id')
	.delete(passportJWT, ItemsController.deleteItem);


/* Lendings routes */
router.route('/lendings')
	.get(passportJWT, LendingsController.getLendings);

router.route('/lendings')
	.post(passportJWT, LendingsController.postLending);

router.route('/lendings/:id')
	.delete(passportJWT, LendingsController.deleteLending);


/* Reservation routes */
router.route('/reservations/')
	.get(passportJWT, ReservationController.getReservations);

router.route('/reservations')
	.post(passportJWT, ReservationController.postReservation);

router.route('/reservations/:id')
	.delete(passportJWT, ReservationController.deleteReservation);

module.exports = router;



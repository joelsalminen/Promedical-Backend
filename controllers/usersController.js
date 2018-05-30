const JWT = require('jsonwebtoken');
const User = require('../models/user');

module.exports = {
	signup: async (req, res, next) => {
		/* Check if there is a user with the same email */
		const foundUser = await User.findOne({email: req.value.body.email});
		if (foundUser) {
			return res.status(403).json({error: "Email is already in use."});
		}

		/*  Create new user */
		User.create(req.value.body).
			then(user=>{
				/* Respond with token */
				const token = JWT.sign({
					iss: 'Promedical',
					sub: user._id,
					iat: new Date().getTime(),
					exp: new Date().setDate(new Date().getDate() + 1)
				}, 'uiiroDg8dDs9L59fj89fFDDs4dgGAgg0jsHsjgP44gg0');
				res.send({token});
			}).catch(next);

	},

	login: async (req, res, next) =>{
		//generate token
		console.log("login called");
	}

}
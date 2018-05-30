const JWT = require('jsonwebtoken');
const User = require('../models/user');
const {JWT_SECRET} = require('../configuration');

signToken = (user) => {
	return JWT.sign({
		iss: 'Promedical',
		sub: user._id,
		iat: new Date().getTime(),
		exp: new Date().setDate(new Date().getDate() + 1)
	}, JWT_SECRET);	
}


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
				/* Generate a token */
				const token = signToken(user);

				/* Respond with token */
				res.send({token});
			}).catch(next);

	},

	login: async (req, res, next) =>{
		//generate token
		console.log("login called");
	}

}
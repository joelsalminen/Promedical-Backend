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
				/* respond with token */
				res.send({token: 'token'});
			}).catch(next);

	},

	login: async (req, res, next) =>{
		//generate token
		console.log("login called");
	}

}
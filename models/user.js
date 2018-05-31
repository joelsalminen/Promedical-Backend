const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const Schema = mongoose.Schema;

const userSchema = new Schema({
	email:{
		type: String,
		required: true,
		unique: true,
		lowercase: true
	},
	password: {
		type: String,
		required: true
	},
	username: {
		type: String,
		required: true,
		unique: true
	}
});

userSchema.pre('save', async function(next){
	try{
		/* Generage salt */
		const salt = await bcrypt.genSalt(10);
		const passwordHash = await bcrypt.hash(this.password, salt);
		this.password = passwordHash;
		next();

	}catch(error){
		next(error);
	}
});


userSchema.methods.isValidPassword = async function(newPassword){
	try{
		/* Check if password is correct, returns boolean */
		return await bcrypt.compare(newPassword, this.password)
	}catch(error){
		throw new Error(error);
	}
}

const User = mongoose.model('user', userSchema);

module.exports = User;
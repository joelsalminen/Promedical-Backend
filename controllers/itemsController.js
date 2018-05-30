const Item = require('../models/item');


module.exports = {
	getItems: async (req, res, next)=> {
		Item.find({}).then((items)=>{
				res.send(items);
			});
	},
	postItems: async (req, res, next)=>{
		Item.create(req.body).then(item=>{
			res.send(item);
		}).catch(next);
	}

}


// router.post('/items', (req, res, next)=>{
// 	Item.create(req.body).then((item)=>{
// 		res.send(item);
// 	}).catch(next);
// });

const Item = require('../models/item');


module.exports = {
	getItems: async (req, res, next)=> {
		Item.find({})
			.then((items)=>{
				res.send(items);
			});
	},
	postItems: async (req, res, next)=>{
		Item.create(req.body)
			.then(item=>{
				res.send(item);
			}).catch(next);
	},
	putItem: async (req, res, next)=>{
		Item.findByIdAndUpdate({_id: req.params.id}, req.body, {new: true})
			.then((item)=>{
				res.send(item);
			}).catch(next);
	},
	deleteItem: async(req, res, next)=>{
		Item.findByIdAndRemove({_id: req.params.id})
			.then((item)=>{
				res.send(item);
			}).catch(next);
	}

}

// , (req, res, next)=>{
// 	Item.findByIdAndRemove({_id: req.params.id}).then((item)=>{
// 		res.send(item);
// 	}).catch(next);
// });



// router.post('/items', (req, res, next)=>{
// 	Item.create(req.body).then((item)=>{
// 		res.send(item);
// 	}).catch(next);
// });

const Document = require('../models/document');


module.exports = {
	getDocuments: async (req, res, next)=> {
		Document.find({})
			.then((documents)=>{
				res.send(documents);
			});
	},
	postDocument: async (req, res, next)=>{
		console.log(req.body)
		Document.create(req.body)
			.then(o => {
				res.send(o);
			}).catch(next);
	}
	// putItem: async (req, res, next)=>{
	// 	Item.findByIdAndUpdate({_id: req.params.id}, req.body, {new: true})
	// 		.then((item)=>{
	// 			res.send(item);
	// 		}).catch(next);
	// },
	// deleteItem: async(req, res, next)=>{
	// 	Item.findByIdAndRemove({_id: req.params.id})
	// 		.then((item)=>{
	// 			res.send(item);
	// 		}).catch(next);
	// }

}

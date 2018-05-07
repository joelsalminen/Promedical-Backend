const express = require('express');

// setting up the router
const router = express.Router();

router.get('/items', (req, res)=>{
	res.send({express: 'Guten Tag'});
});

router.post('/items', (req, res)=>{
	res.send({message: 'post request'});
});


router.put('/items/:id', (req, res)=>{
	console.log(req.params.id);
	res.send({message: 'put request'});
});

// router.delete(()=>{

// });


module.exports = router;
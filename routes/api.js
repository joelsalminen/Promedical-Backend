const express = require('express');

// setting up the router
const router = express.Router();

router.get('/items', (req, res)=>{
	res.send({express: 'Guten Tag'});
});

router.post('/items', (req, res)=>{
	res.send({message: 'post request'});
});


// router.put(()=>{

// });

// router.delete(()=>{

// });


module.exports = router;
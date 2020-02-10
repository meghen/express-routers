//name the router file with dot case (?) and also after the router in the CRUD fxs
const express = require('express');
const router = express.Router();
//we don't need full express functionality so we aren't using the app variable in the routers here
//instead we are usiing an express method .Router()
//we can delete '/product' because we are already in the product router
//if we left '/product' in below, the server would be looking for url localhost:5000/product/product
router.get('/', (req,res)=>{
    res.send('this is a string!')
});
router.post('/', (req,res)=>{
    console.log(req.body);
    res.sendStatus(201);
});

module.exports = router;
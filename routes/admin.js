const express = require('express');
const { redirect } = require('express/lib/response');

const router = express.Router();

router.get('/add-product', (req,res,next) =>{
    res.send('<form action="/product" method="POST"><input type="text" name="title" /><button type="submit">Add</button></form>');
});

router.post('/product', (req,res,next)=>{
    res.send(req.body);
    res.redirect('/');
});

module.exports = router;
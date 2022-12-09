const express = require ('express');
const form = require('../controllers/usercontrollers');
//const registerUser = require('../controllers/userControllers')


const router = express.Router()

router.post("/submit",form);
router.get('/',(req,res)=>{
    res.render('index')
})




module.exports = router;




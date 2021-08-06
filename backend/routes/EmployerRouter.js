const express = require('express');
const { login,getAuth,register } = require('../controllers/Employer');
const isAuth = require('../middlewares/author');
const { employerRules, validator, loginRules } = require('../middlewares/EmployerValidator');

const router = express.Router();



router.post('/registerEmployer', employerRules(), validator , register);
 
router.post('/login',login)
router.get('/isAuth',isAuth,getAuth)

module.exports=router 
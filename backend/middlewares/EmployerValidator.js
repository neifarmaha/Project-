const {body, validationResult ,check} = require("express-validator");

const employerRules=() => [
     
    body('companyName',"lastName is required").notEmpty(),
    body('email',"it should an Email").isEmail(),
    body('phonenumber',"phonenumber is required").notEmpty(),
    body('phonenumber',"phonenumber is Numeric").isNumeric(),
    body('location',"location is required").notEmpty(),
    body('password',"password should contain at least 6 caracteres").isLength({min:6}),
    body('website',"it should a website").notEmpty(),
]
const loginRules = () =>  [
    check('email','username or email is required').notEmpty(),
    check('password','password is required').notEmpty()
  ]

  const validator=(req,res,next)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
}else{
    next()
}
}

module.exports={employerRules,loginRules,validator};

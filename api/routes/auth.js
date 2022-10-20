const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require('bcrypt');


//REGISTER
router.post("/register", async(req,res)=>{
  try{
    const hashedPass = await bcrypt.hashSync(req.body.password, 10);
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPass,
    });
    const user= await newUser.save();
    res.status(200).json(user)

  } catch(err){
    res.status(500).json(err)
  }

});

//LOGIN
router.post("/login", async(req,res)=>{
  try{
    const user = await User.findOne({username:req.body.username});
    const validate = await bcrypt.compare(req.body.password, user.password);

    if (user && validate){
      const { password, ...others } = user._doc;
      res.status(200).json(others);
      return;
    }
    res.status(400).json("Wrong credentials!");
  } catch(err){
    res.status(500).json(err);
  }

})


module.exports = router
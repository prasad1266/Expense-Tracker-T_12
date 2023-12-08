const userModel = require("../models/userModel");

//login callback(takes two parametters)
const loginController = async (req, res) => {
  try {
    const { email, password } = req.body; //taking email and password from user
    const user = await userModel.findOne({ email, password }); //check in database
    //if user not fount send status and res
    if (!user) {
      return req.status(404).send("User Not Found");
    }
    //if successful send success status and 
    res.status(200).json({
        success:true,
        user
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error,
    });
  }
};
//________________________________________________________________________
//register user callback
const registerController = async(req,res) => {
    try {
    //got register user data(req.body) store it in databse(i.e. userModel) 
     const newUser = new userModel(req.body);
     //save it in Model
     await newUser.save();
     //send responec and status 201=>Something is creatyed
     res.status(201).json({
        success:true,
        newUser,
     })
        
    } catch (error) {
        res.status(400).json({
            success:false,
            error
        })
    }



};

module.exports = { loginController, registerController };

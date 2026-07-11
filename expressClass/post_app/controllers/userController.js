const userModel = require('../model/useSchema.js')

exports.register = async (req, res) => {

    try {
        let { username , password } = req.body;

        if (!username || !password) {
            return res.status(403).json({ success: false, message: "All fields are mandatory " })
        }

        const existingUser = await userModel.findOne({ username });

        if (existingUser) {
            return res.status(409).json({
                success: false,
                message: "Username already exists"
            });
        }

      let user =    await userModel.create({ username, password })
       const token = user.generateAuthToken();    
        

        res.status(201).json({ success: true, message: "User Created Successfully "  , token })
 
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message }) 


    }
}

exports.login = async (req,res)=>{

    try {
          let { username , password } = req.body ;

          if(!username || !password){
            return res.status(401).json({success:false , message:"All Fields required "})
          }

          let user = await  userModel.findOne({username }).select("+password")

          if(!user){
            return res.status(404).json({success:false , message:"User Not Found "})
          } 

          let isMatch = await user.comparePassword(password);

          if(!isMatch){
            return res.status(401).json({success:false , message:"Invalid Credentials "})
          }

          const token = user.generateAuthToken();

          const loggedInUser = await userModel.findById(user._id).select("-password");

          res.status(200).json({
            success:true,
            message:"Login Successful",
            token,
            user: loggedInUser
          }) 
        
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }
}

// Returns the logged-in user's profile.
exports.me = async (req, res) => {
    return res.status(200).json({
        success: true,
        user: req.user
    });
};

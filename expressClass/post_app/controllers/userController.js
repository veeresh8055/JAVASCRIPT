const userModel = require('../model/useSchema.js')

exports.register = async (req, res) => {

    try {
        let { username , password } = req.body;

        if (!username || !password) {
            return res.status(403).json({ success: false, message: "All fields are mandatory " })
        } else {
            let user = await userModel.create({ username, password })

            res.status(201).json({ success: true, message: "User Created Successfully " })
        }

    } catch (error) {
        return res.status(500).json({ success: false, message: error.message })


    }
}

exports.login = async (req,res)=>{

    try {
          let { username , password } = req.body ;

          if(!username || !password){
            return res.
          }
        
    } catch (error) {
        
    }
}
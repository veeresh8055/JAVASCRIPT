
const postModel = require('../model/postModel.js')

exports.createPost= async (req,res)=>{
       
    try{
              let post  = req.file?.path ;
              let { name , description , author   } = req.body ; 
              
              if(!name || !description || !author || !post ){
                return res.status(403).json({success:false , message:"All fields are Mandatory "})
              }
              else{
                await postModel.create( {name ,post , author , description });
                return res.status(201).json({success:true , message:"Post Created Successfully ", post })

              }
    }catch(error){
                     return res.status(500).json({success:false , message:error.message })

    }
}

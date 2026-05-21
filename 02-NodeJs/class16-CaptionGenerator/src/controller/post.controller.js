import postModel from "../models/posts.model.js";
import generateCaption from '../service/ai.service.js'
import uploadFile from "../service/storage.service.js";
import uuid from 'uuid'

const createPostController = async (req, res,next)=>{
 
    const file = req.file ;

    console.log(`file recieved  ${file}`)

    const base64Image =  new Buffer.from(file.buffer).toString("base64")
    
   const caption = await generateCaption(base64Image)

   const result = await uploadFile(base64Image ,`${uuid()}`)

     const post = await postModel.create({
        image:result.url ,
        caption :caption ,
        userId : req.user._id
     })

     res.status(200).json({
        message:"post created successfully",
        post 
     })
}

export default createPostController ; 
import postModel from "../models/posts.model.js";
import generateCaption from "../service/ai.service.js";
import uploadFile from "../service/storage.service.js";
import { v4 as uuid } from "uuid";

const createPostController = async (req, res, next) => {
  const file = req.file;


  if (!file) {
    return res.status(400).json({
      message: "Image file is required",
    });
  }

  const base64Image = Buffer.from(file.buffer).toString("base64");

  try {
    //generating caption 
    const caption = await generateCaption(base64Image);
    //uploading file in imagekit 
    const result = await uploadFile( base64Image, `${uuid()}`); 

    //creating post
    const post = await postModel.create({
      image: result.url,
      caption: caption,
      user: req.user._id,
    });

    res.status(200).json({
      message: "post created successfully",
      post,
    });

  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: err.message || "Failed to create post",
    });
  }
  
};

export default createPostController;

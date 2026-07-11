
const postModel = require('../model/postModel.js')

exports.createPost= async (req,res)=>{
       
    try{
              const media  = (req.files || []).map((file) => file.path);
              let { name , description } = req.body ; 
              
              if(!name || !description || media.length === 0 ){
                return res.status(403).json({success:false , message:"All fields are Mandatory "})
              }
              else{
                const post = await postModel.create({
                  name,
                  media,
                  author: req.user.username,
                  description,
                  user: req.user._id
                });

                return res.status(201).json({
                  success:true,
                  message:"Post Created Successfully",
                  post
                })

              }
    }catch(error){
                     return res.status(500).json({success:false , message:error.message })

    }
}

// Returns only the logged-in user's posts.
exports.getAllPosts = async (req, res) => {
  try {
    const posts = await postModel.find({ user: req.user._id }).sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      count: posts.length,
      posts
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// Returns a single post that belongs to the logged-in user.
exports.getSinglePost = async (req, res) => {
  try {
    const post = await postModel.findOne({
      _id: req.params.id,
      user: req.user._id
    });

    if (!post) {
      return res.status(404).json({
        success: false,
        message: "Post not found"
      });
    }

    return res.status(200).json({
      success: true,
      post
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// Updates a post that belongs to the logged-in user.
exports.updatePost = async (req, res) => {
  try {
    const media = (req.files || []).map((file) => file.path);
    const { name, description } = req.body;

    const post = await postModel.findOne({
      _id: req.params.id,
      user: req.user._id
    });

    if (!post) {
      return res.status(404).json({
        success: false,
        message: "Post not found"
      });
    }

    if (name) post.name = name;
    if (description) post.description = description;
    if (media.length > 0) post.media = media;

    await post.save();

    return res.status(200).json({
      success: true,
      message: "Post updated successfully",
      post
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// Deletes a post that belongs to the logged-in user.
exports.deletePost = async (req, res) => {
  try {
    const post = await postModel.findOneAndDelete({
      _id: req.params.id,
      user: req.user._id
    });

    if (!post) {
      return res.status(404).json({
        success: false,
        message: "Post not found"
      });
    }

    return res.status(200).json({
      success: true,
      message: "Post deleted successfully"
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

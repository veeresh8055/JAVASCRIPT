let { Schema, model } = require("mongoose");

let postSchema = Schema({
    media: {
        type: [String],
        required: true
    },
    name:{
        type: String,
        required: true,
        minLength: 3
    },
    description:{
        type: String,
        required: true,
        minLength: 10
    },
    author:{
        type: String,
        required: true,
        minLength: 3
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "users",
        required: true
    }
}, { timestamps: true });

module.exports = model("posts", postSchema);

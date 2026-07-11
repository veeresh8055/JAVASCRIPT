const { Schema, model } = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

let userSchema = Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minLength: 3
    },
    password:{
        type: String,
        required: true,
        minLength: 6,
        select: false
    }
}, { timestamps: true });

userSchema.pre("save", async function () {
    if (!this.isModified("password")) {
        return;
    }

    this.password = await bcrypt.hash(this.password, 10);
});

userSchema.methods.comparePassword = function (password) {
    return bcrypt.compare(password, this.password);
};

userSchema.methods.generateAuthToken = function () {
    return jwt.sign(
        { id: this._id, username: this.username },
        process.env.JWT_SECRET,
        { expiresIn: "7d" }
    );
};

module.exports = model("users", userSchema);

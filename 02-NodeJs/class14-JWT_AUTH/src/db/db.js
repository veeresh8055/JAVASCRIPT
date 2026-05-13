import mongoose from "mongoose";

const connectDB = async () => {
    if (!process.env.MONGODB_URL) {
        throw new Error("MONGODB_URL is not defined in .env");
    }

    await mongoose.connect(process.env.MONGODB_URL);
    console.log("DB Connected");
};

export default connectDB;

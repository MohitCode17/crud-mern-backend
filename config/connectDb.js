import mongoose from "mongoose";

mongoose.set('strictQuery', false);

const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Database connected successfully");
    } catch (error) {
        console.log(`Error while connect with db: ${error}`);
    }
}

export default connectDb;
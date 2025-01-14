import mongoose from "mongoose";
import dotenv from "dotenv";
const connectDb = async (req, res) => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDb connected: ${conn.connection.host}`);
  } catch (error) {
    console.log("Error connection to mongoDb", error.message);
    process.exit(1);
  }
};
// 9DuX0efoH31WmS5Q

export default connectDb;

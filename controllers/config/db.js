import mongoose from "mongoose";
import colors from "colors";

// Your code using 'colors' module goes here

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log(
      `Connected To Mongodb Database ${conn.connection.host}`.bgBlue.white
    );
  } catch (error) {
    console.log(`Error in Mongodb ${error}`.bgRed.white);
  }
};

export default connectDB;

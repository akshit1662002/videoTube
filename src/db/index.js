import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const MONGODB_URL = process.env.MONGODB_URL;

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${MONGODB_URL}/${DB_NAME}`
    );
    // Log only connectionInstance
    console.log(connectionInstance);
    //important things
    console.log("DB HOST:", connectionInstance.connection.host);
    console.log("DB NAME:", connectionInstance.connection.name);
    console.log("READY STATE:", connectionInstance.connection.readyState);

    // Or log a specific part:
    console.log(
      "MONGO DB CONNECTED : DB HOST:",
      connectionInstance.connection.host
    );
  } catch (error) {
    console.log("MONGO CONNECTION FAILED:", error);
    process.exit(1);
  }
};

export default connectDB;

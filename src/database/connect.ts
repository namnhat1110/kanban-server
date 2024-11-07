import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const db = await mongoose.connect(
      process.env.MONGODB_URI || "mongodb://localhost:27017/kanban"
    );
    console.log(`MongoDB Connected: ${db.connection.host}`);
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  }
};

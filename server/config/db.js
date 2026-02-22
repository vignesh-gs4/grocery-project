import mongoose from "mongoose";

const connectDB = async () => {
  try {
    mongoose.connection.on("connected", () => {
      console.log("Database Connected : ", mongoose.connection.name);
    });
    // await mongoose.connect(process.env.MONGODB_URI, {dbName: "groceryDB"});
    await mongoose.connect(`${process.env.MONGODB_URI}/groceryDB`);
  } catch(err) {

  }
};

export default connectDB;
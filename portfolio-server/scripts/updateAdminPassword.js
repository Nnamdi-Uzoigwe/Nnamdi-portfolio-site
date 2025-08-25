import mongoose from "mongoose";
import Admin from "../models/Admin.js";
import bcrypt from "bcryptjs";

const MONGO_URI = "mongodb+srv://uzonnamdi31:v7gGrtfLSm71qeFo@cluster0.5u3861d.mongodb.net/nnamdi-portfolio?retryWrites=true&w=majority";

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("MongoDB connected");
  } catch (err) {
    console.error("MongoDB connection error:", err);
    process.exit(1);
  }
};

const updateAdminPassword = async () => {
  try {
    const admin = await Admin.findOne({ username: "nnamdi-cipher" });
    if (!admin) {
      console.log("Admin not found!");
      process.exit(1);
    }

    admin.password = await bcrypt.hash("nnamdiiscoming2026", 10);
    await admin.save();

    console.log("Admin password updated successfully!");
    process.exit(0);
  } catch (err) {
    console.error("Error updating admin password:", err);
    process.exit(1);
  }
};

// Run the script
const run = async () => {
  await connectDB();
  await updateAdminPassword();
};

run();

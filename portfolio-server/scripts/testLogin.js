import mongoose from "mongoose";
import Admin from "../models/Admin.js";
import bcrypt from "bcryptjs";

const MONGO_URI = "mongodb+srv://uzonnamdi31:v7gGrtfLSm71qeFo@cluster0.5u3861d.mongodb.net/nnamdi-portfolio?retryWrites=true&w=majority";

mongoose.connect(MONGO_URI);

const testLogin = async () => {
  const admin = await Admin.findOne({ username: "nnamdi-cipher" });
  if (!admin) return console.log("Admin not found");

  const isMatch = await bcrypt.compare("nnamdiiscoming2026", admin.password);
  console.log("Password match?", isMatch);
};

testLogin();

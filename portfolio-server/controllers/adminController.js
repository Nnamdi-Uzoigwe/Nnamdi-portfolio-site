// import Admin from "../models/Admin.js";
// import jwt from "jsonwebtoken";

// export const loginAdmin = async (req, res) => {
//   const { username, password } = req.body;

//   const admin = await Admin.findOne({ username });
//   if (admin && (await admin.matchPassword(password))) {
//     const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET, {
//       expiresIn: "30d",
//     });
//     res.json({ _id: admin._id, username: admin.username, token });
//   } else {
//     res.status(401).json({ message: "Invalid credentials" });
//   }
// };



import Admin from "../models/Admin.js";
import jwt from "jsonwebtoken";

export const loginAdmin = async (req, res) => {
  const { username, password } = req.body;

  try {
    const admin = await Admin.findOne({ username });
    if (!admin) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const isMatch = await admin.matchPassword(password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET, {
      expiresIn: "30d",
    });

    res.json({ _id: admin._id, username: admin.username, token });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

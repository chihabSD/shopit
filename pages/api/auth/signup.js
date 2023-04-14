import { validateEmail } from "../../../utils/valdiation";
import db from "../../../utils/db";
import nc from "next-connect";
import User from "@/models/user";
import bcrypt from "bcrypt";
import { createActivationToken } from "@/utils/tokens";
const handler = nc();

handler.post(async (req, res) => {
  await db.connectDb();
  const { name, email, password } = req.body;
  try {
    if (!name || !email || !password) {
      return res.status(400).json({ message: "Please fill in all fields" });
    }
    if (!validateEmail(email)) {
      return res.status(400).json({ message: "Please enter a valid email" });
    }

    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "This user already registered" });
    }

    if (password.length < 6) {
      return res.status(400).json({ message: "Password must be 6 characters" });
    }
    const cryptedPassword = await bcrypt.hash(password, 12);

    const newUser = new User({
      email,
      password: cryptedPassword,
      name,
    });
    const addedUser = await newUser.save();

    const activation_token = createActivationToken({
        id:addedUser._id.toString()

    })
    return res.status(200).json({ token: activation_token });


  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default handler;

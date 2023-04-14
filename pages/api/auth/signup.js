import { validateEmail } from "../../../utils/valdiation";
import db from "../../../utils/db";
import nc from "next-connect";

const handler = nc();

handler.post(async (req, res) => {
  await db.connectDb();
  const { name, email, password } = req.body;
  try {
    if(!name || !email || !password){
        return res.status(400).json({message: "Please fill in all fields"})
    }
    if(!validateEmail(email)){

        return res.status(400).json({message: "Please enter a valid email"})
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default handler;

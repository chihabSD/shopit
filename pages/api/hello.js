import db from "../../utils/db";

export default async function handler(req, res) {
    db.connectDb()
    const users = [
      { id: 1, name: "Alice" },
      { id: 2, name: "Bob" },
      { id: 3, name: "Charlie" }
    ];
  
    res.status(200).json(users);
  }
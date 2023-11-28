import express from "express";

const app = express();
const Port = 3000;

app.use(express.json());

let user = [];

app.post("/user/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (!(username && email && password)) {
      return res.status(400).json({ message: "wrong credentials" });
    }
    if (user.some((user) => user.username === username)) {
      return res.status(400).json({ message: "Username already taken" });
    }
    if (user.some((email) => user.email === email)) {
      return res.status(400).json({ message: "email already exist" });
    }
    if (password.length < 7) {
      return res.status(400).json({ message: "password not complete" });
    }

    const newUser = { username, email, password };
    user.push(newUser);
    res.status(201).json({
      message: "User registered successfully",
      newUser,
    });
  } catch (error) {
    return res.sendStatus(400).json();
  }
});

app.listen(Port, () => {
  console.log(`server running on ${Port}`);
});

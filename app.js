import express from "express";

const app = express();
const Port = 3000;

app.use(express.json());

let user = [];
let task = [];



//middleware for authentication

// const authenticateToken = () => async (req, res, next) {
//     const token =  await req.headers.authorization;

//     if (!token) {
//       return res.status(401).json({ message: 'Unauthorized - Token missing' });
//     }
// }

app.post("/user/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    if (!(username && email && password)) {
      return res.status(400).json({
        success: false,
        message: "invalid credentials",
      });
    }
    const newUser = { username, email, password };
    user.push(newUser)
  } catch (error) {
    return res.send(400);
  }
});

app.post("/user/login", async (req, res) => {});

app.listen(Port, () => {
  console.log(`server running on ${Port}`);
});

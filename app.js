import express from "express";
import dotenv from "dotenv"
const routes = express.Router();

dotenv.config();


const app = express();
const Port = process.env.PORT;

app.use(express.json());

let user = [];



app.post("/user/register")

app.listen(Port, () => {
  console.log(`server running on ${Port}`);
});

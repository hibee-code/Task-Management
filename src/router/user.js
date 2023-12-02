import express from "express"
const routes  = express.Router();
import { signin, signup } from "../controller/user";



routes.post("/signup", signup);
routes.post("/signin", signin);




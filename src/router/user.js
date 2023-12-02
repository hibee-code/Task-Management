import express from "express"
const routes  = express.Router();
import { signup } from "../controller/user";



routes.post("/signup", signup);





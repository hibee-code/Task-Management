import bcrypt from "bcrypt";
import Jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { UserModel } from "../model/users";

export const signup = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (!(username && email && password)) {
      return res.status(400).json({ message: "wrong credentials" });
    }
    const user = await userModel.findOne({ email });

    if (user)
      return res
        .status(400)
        .json({ message: `Email already exist in the database ${email}` });

    if (password.length < 7) {
      return res
      .status(400)
      .send({ message: "password not complete" });
    }

    const hash_password = bcrypt.hashSync(password, 10);

    const User = await UserModel.create({
      username,
      email,
      password: hash_password,
    });

    const token = Jwt.sign(
      { id: newUser._id, email: newUser.email },
      process.env.SECRET,
      { expiresIn: "1h" }
    );
    btoa(token); 
    return res
    .status(201)
    .json({ message: "User registered successfully",
      User:User,
    });

  } catch (error) {
    return res
    .sendStatus(400)
    .json({ message: " error: user not created"});
  }
};



export const signin = async (req,res) => {
  try {
    const {email,password} = req.body;

    if (!(email && password)) {
      return res.status(400).json({ message: "wrong credentials" });
    }

    let user = await UserModel.findOne({ email });

    if (!user)
      return res
        .status(400)
        .json({ msg: `The user's email is not in our database ${email}` });

        const hash = user.password;

        const password_compare = bcrypjs.compareSync(password, hash);

        if(!password_compare){
          return res.status(400).json({ msg: `Password incorrect!` });
        }
        const token = jwt.sign(
          { id: user._id, email: user.email },
          process.env.SECRET,
          { expiresIn: "1h" }
        );

        user = await UserModel.findByIdAndUpdate(
          user?._id,
          { token },
          { new: true }
        );

        return res
    .status(201)
    .json({ message: "User successfully login",
      user:user,
 });
  } catch (error) {
    return res
    .sendStatus(400)
    .json({ message: " error: wrong user"});
  }
  }


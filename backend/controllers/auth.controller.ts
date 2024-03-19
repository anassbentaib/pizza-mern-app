import User from "../model/auth.model";
import { errorHandler } from "../utils/error";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

export const signup = async (req: any, res: any, next: any) => {
  const { name, email, password } = req.body;

  if (!email || !password || !name) {
    return next(errorHandler(400, "All fields are required"));
  }
  try {
    const userExist = await User.findOne({ email: email });
    const nameExist = await User.findOne({ name: name });
    if (nameExist) {
      return next(errorHandler(401, "the name already taken!"));
    }
    if (userExist) {
      return next(errorHandler(401, "the email already taken!"));
    }

    if (name) {
      if (name.length < 6 || name.length > 50) {
        return next(
          errorHandler(400, "The name must be between 6 and 50 characters")
        );
      }
    }
    if (password) {
      if (password.length < 6) {
        return next(
          errorHandler(400, "Password must be at least 6 characters")
        );
      }
    }
    const hashPassword = await bcryptjs.hashSync(password, 12);

    const newUser = await User.create({
      email,
      name,
      password: hashPassword,
    });

    await newUser.save();
    res.json("signup successfully");
  } catch (error: any) {
    return next(error);
  }
};

export const signin = async (req: any, res: any, next: any) => {
  const { email, password } = req.body;

  if (!email || !password || email === "" || password === "") {
    return next(errorHandler(400, "All fields are required"));
  }
  try {
    const userExist = await User.findOne({
      email: email,
    });
    if (!userExist) {
      return next(errorHandler(400, "Invalid credentials "));
    }
    const isPasswordCorrect = await bcryptjs.compare(
      password,
      userExist.password
    );
    if (!isPasswordCorrect) {
      return next(errorHandler(400, "Invalid credentials"));
    }
    const token = await jwt.sign(
      {
        id: userExist?._id,
      },
      process.env.JWT_SECRET_KEY!
    );
    const userObject = userExist?.toJSON();
    const { password: pass, ...rest } = userObject || {};

    res
      .status(200)
      .cookie("access_toke", token, {
        httpOnly: true,
      })
      .json(rest);
  } catch (error) {
    return next(error);
  }
};

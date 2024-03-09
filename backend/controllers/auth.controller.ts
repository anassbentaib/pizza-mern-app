import User from "../model/auth.model";
import { errorHandler } from "../utils/error";
import bcryptjs from "bcryptjs";
export const test = (req: any, res: any) => {
  res.json({ message: "HELLO FROM CONROLLEERS" });
};

export const signup = async (req: any, res: any, next: any) => {
  const { name, email, password } = req.body;

  if (!email || !password || !name) {
    return next(errorHandler(400, "All fields are required"));
  }
  try {
    const userExist = await User.findOne({ email: email });
    if (userExist) {
      return next(errorHandler(401, "the email already taken!"));
    }

    if (name) {
      if (name.length < 6 || name.length > 20) {
        return next(
          errorHandler(400, "The name must be between 6 and 20 characters")
        );
      }
      if (name.includes(" ")) {
        return next(errorHandler(400, "The name cannot contain spaces"));
      }
      if (name !== name.toLowerCase()) {
        return next(errorHandler(400, "The name must be lowercase"));
      }
      if (!name.match(/^[a-zA-Z0-9]+$/)) {
        return next(
          errorHandler(400, "The name can only contain letters and numbers")
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

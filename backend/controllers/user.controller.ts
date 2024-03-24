import User from "../model/auth.model";
import { errorHandler } from "../utils/error";
import bcryptjs from "bcryptjs";

export const update = async (req: any, res: any, next: any) => {
  try {
    if (req.user.id !== req.params.userId) {
      return next(errorHandler(403, "You are not allowed to update this user"));
    }
    if (req.body.password) {
      if (req.body.password.length < 6) {
        errorHandler(400, "Password must be at least 6 characters");
      }
      req.body.password = bcryptjs.hashSync(req.body.password, 12);
    }
    if (req.body.name) {
      if (req.body.name.length < 6 || req.body.name.length > 50) {
        return next(
          errorHandler(400, "The name must be between 6 and 50 characters")
        );
      }
      if (req.body.name.includes(" ")) {
        return next(errorHandler(400, "name cannot contain spaces"));
      }
      if (req.body.name !== req.body.name.toLowerCase()) {
        return next(errorHandler(400, "name must be lowercase"));
      }
      if (!req.body.name.match(/^[a-zA-Z0-9]+$/)) {
        return next(
          errorHandler(400, "name can only contain letters and numbers")
        );
      }
    }

    const upatedUser = await User.findByIdAndUpdate(
      req.params.userId,
      {
        $set: {
          name: req.body.name,
          email: req.body.email,
          password: req.body.password,
          birthdate: req.body.birthdate,
          phone: req.body.phone,
        },
      },
      { new: true }
    );

    res.status(200).json(upatedUser);
  } catch (error) {
    next(error);
  }
};

export const SignOut = async (req: any, res: any, next: any) => {
  try {
    res
      .clearCookie("access_token")
      .status(200)
      .json("user has been signed out");
  } catch (error) {
    next(error);
  }
};

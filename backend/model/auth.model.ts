import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  profilePicture: {
    type: String,
    default:
      "https://www.freepik.com/free-psd/3d-illustration-person-with-sunglasses_27470334.htm#fromView=search&page=1&position=1&uuid=9c714954-ec04-44b8-893f-9f2174f95b27",
  },
  birthdate: {
    type: Date,
  },
  phone: {
    type: String,
  },
});

const User = mongoose.model("User", userSchema);
export default User;

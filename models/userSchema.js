import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    age: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
    },
    profession: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const userModel = new mongoose.model("user", userSchema);

export default userModel;
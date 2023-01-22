import express from "express";
import userModel from "../models/userSchema.js";
const router = express.Router();

// API FOR REGISTER USER || POST
router.post("/register", async (req, res) => {
  const { name, email, age, phone, profession, address, description } =
    req.body;
  // all fields are required - check error
  if (
    !name ||
    !email ||
    !age ||
    !phone ||
    !profession ||
    !address ||
    !description
  ) {
    return res.status(422).json("All fields are required !");
  }

  try {
    // email should be unique - check error
    const userExists = await userModel.findOne({ email: email });

    if (userExists) {
      returnres.status(404).json("User exist with same email");
    } else {
      const newUser = new userModel({
        name,
        email,
        age,
        phone,
        profession,
        address,
        description,
      });
      await newUser.save();
      res.status(201).json(newUser);
    }
  } catch (error) {
    res.status(404).json(error);
  }
});

// API FOR GET ALL USER || GET
router.get("/getUsers", async (req, res) => {
  try {
    const userData = await userModel.find();
    res.status(200).json(userData);
  } catch (error) {
    res.status(404).json(error);
  }
});

// API FOR GET SINGLE USER || GET
router.get("/getUser/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const singleUser = await userModel.findById({ _id: id });
    res.status(200).json(singleUser);
  } catch (error) {
    res.status(422).json(error);
  }
});

// API FOR UPDATE USER DETAILS || PUT
router.put("/updateDetails/:id", async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  try {
    let updatedData = await userModel.findByIdAndUpdate(id, data);
    res.status(201).json(updatedData);
  } catch (error) {
    res.status(422).json(error);
  }
});

// API FOR DELETE USER || DELETE
router.delete("/removeUser/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await userModel.findByIdAndDelete({ _id: id });
    res.status(200).json("User deleted");
  } catch (error) {
    res.status(422).json(error);
  }
});

export default router;

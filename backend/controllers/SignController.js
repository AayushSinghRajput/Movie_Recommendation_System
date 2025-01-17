const User = require("../models/UserSchema");
const bcrypt = require("bcrypt");

const SignGetController = async (req, res) => {
  try {
    const getData = await User.find();
    res.status(200).json({ message: "success", data: getData });
  } catch (error) {
    res.status(500).json({ message: "failed", error: error });
  }
};

const SignController = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res
        .status(400)
        .json({ message: "User with this email already exists." });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ name, email, password: hashedPassword });

    await newUser.save();
    res.status(201).json({ message: "Signup successful!" });
  } catch (error) {
    res.status(500).json({ message: "Server error. Please try again later." });
  }
  // try {
  //   //Extracting data from request body
  //   const { name, email, password } = req.body;
  //   // Creating a new instance of Usermodel with data from the request
  //   const newData = new User({
  //     name,
  //     email,
  //     password,
  //   });
  //   //Saving the new user to the database
  //   const saveData = await newData.save();
  //   //Sending success response
  //   res.status(200).json({ message: "success", data: saveData });
  // } catch (err) {
  //   //Sending error response
  //   res.status(500).json({ message: "failed", error: err });
  // }
};

const SignPutController = async (req, res) => {
  try {
    const id = req.params.id;
    const { name, email, password } = req.body;
    const updateData = await User.findByIdAndUpdate(
      id,
      { name, email, password },
      { new: true }
    );
    res.status(200).json({ message: "success", data: updateData });
  } catch (error) {
    res.status(500).json({ message: "failed", error: error });
  }
};

const SignDeleteController = async (req, res) => {
  try {
    const id = req.params.id;
    const deleteData = await User.findByIdAndDelete(id);
    res.status(200).json({ message: "success", data: deleteData });
  } catch (error) {
    res.status(500).json({ message: "failed", error: error });
  }
};
module.exports = {
  SignGetController,
  SignController,
  SignPutController,
  SignDeleteController,
};

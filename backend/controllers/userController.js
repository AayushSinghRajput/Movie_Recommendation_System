const User = require("../models/UserSchema");

//getuser controller
const userGetController = async (req, res) => {
  try {
    const getData = await User.find();
    res.status(200).json({ message: "success", data: getData });
  } catch (error) {
    res.status(500).json({ message: "failed", error: error });
  }
};

//postuser controller
const userPostController = async (req, res) => {
  try {
    //Extracting data from request body
    const { name, email, password } = req.body;
    // Creating a new instance of Usermodel with data from the request
    const newData = new User({
      name,
      email,
      password,
    });
    //Saving the new user to the database
    const saveData = await newData.save();
    //Sending success response
    res.status(200).json({ message: "success", data: saveData });
  } catch (err) {
    //Sending error response
    res.status(500).json({ message: "failed", error: err });
  }
};

//put user controller
const userPutController = async (req, res) => {
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

//delete user controller
const userDeleteController = async (req, res) => {
  try {
    const id = req.params.id;
    const deleteData = await User.findByIdAndDelete(id);
    res.status(200).json({ message: "success", data: deleteData });
  } catch (error) {
    res.status(500).json({ message: "failed", error: error });
  }
};

module.exports = {
  userGetController,
  userPostController,
  userPutController,
  userDeleteController,
};

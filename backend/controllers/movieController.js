const MovieModel = require("../models/MovieSchema");

//get movie controller
const movieGetController = async (req, res) => {
  try {
    const getData = await MovieModel.find();
    res.status(200).json({ message: "success", data: getData });
  } catch (error) {
    res.status(500).json({ message: "failed", error: error });
  }
};

//post movie controller
const moviePostController = async (req, res) => {
  try {
    const { title, director, releaseDate, genres } = req.body;
    const movie = new MovieModel({ title, director, releaseDate, genres });
    const saveData = await movie.save();
    res.status(201).json({ message: "success", data: saveData });
  } catch (error) {
    res.status(500).json({ message: "failed", error: error });
  }
};

//put movie controller
const moviePutController = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, director, releaseDate } = req.body;
    const updateData = await MovieModel.findByIdAndUpdate(
      id,
      { title, director, releaseDate },
      { new: true }
    );
    res.status(200).json({ message: "success", data: updateData });
  } catch (error) {
    res.status(500).json({ message: "failed", error: error });
  }
};

//delete movie controller
const movieDeleteController = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteData = await MovieModel.findByIdAndDelete(id);
    res.status(200).json({ message: "success", data: deleteData });
  } catch (error) {
    res.status(500).json({ message: "failed", error: error });
  }
};

module.exports = {
  movieGetController,
  moviePostController,
  moviePutController,
  movieDeleteController,
};

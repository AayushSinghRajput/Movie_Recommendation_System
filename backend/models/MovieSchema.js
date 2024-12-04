const mongoose = require("mongoose");
const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  releaseDate: {
    type: Date,
    required: true,
  },
  genres: {
    type: [String],
    required: true,
  },
  cast: [
    {
      name: {
        type: String,
        trim: true,
      },
      role: {
        type: String,
        trim: true,
      },
    },
  ],
  director: {
    type: String,
    trim: true,
  },
  ratings: {
    average: {
      type: Number,
      min: 0,
      max: 10,
      default: 0,
    },
    numberOfRatings: {
      type: Number,
      default: 0,
    },
  },
  posterUrl: {
    type: String, //url to the movie poster image
  },
  trailerUrl: {
    type: String, //url to the movie trailer video
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("Movie", movieSchema);

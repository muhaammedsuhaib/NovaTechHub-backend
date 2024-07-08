import mongoose from "mongoose";

const tutorialSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  introduction: {
    type: String,
    required: true,
  },
  whatIs: {
    type: String,
    required: true,
  },
  statements: {
    type: String,
    required: true,
  },
  syntax: {
    type: String,
    required: true,
  },
  comments: {
    type: String,
    required: true,
  },
  variables: {
    type: String,
    required: true,
  },
  dataTypes: {
    type: String,
    required: true,
  },
});

const Tutorial = mongoose.model("Tutorial", tutorialSchema);
export default Tutorial;

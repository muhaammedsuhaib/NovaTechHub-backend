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
  WhatIs: {
    type: String,
    required: true,
  },
  Statements: {
    type: String,
    required: true,
  },
  Syntax: {
    type: String,
    required: true,
  },
  Comments: {
    type: String,
    required: true,
  },
  Variables: {
    type: String,
    required: true,
  },
  DataTypes: {
    type: String,
    required: true,
  },
});

const Tutorial = mongoose.model("Tutorial", tutorialSchema);
export default Tutorial;

import Tutorial from "../models/tutorialModel.js";
import tutorialSchema from "../validations/tutorialValidation.js";

export const createTurolial = async (req, res) => {
  const { error } = tutorialSchema.validate(req.body);
  if (error) {
    throw new Error(error.details[0].message);
  }
  const {
    title,
    introduction,
    whatIs,
    statements,
    syntax,
    comments,
    variables,
    dataTypes,
  } = req.body;
  const tutorial = new Tutorial({
    title,
    introduction,
    whatIs,
    statements,
    syntax,
    comments,
    variables,
    dataTypes,
  });
  await tutorial.save();
  res.status(201).send(tutorial);
};


export const getAllTutorials = async (req, res) => {
  try {
    const tutorials = await Tutorial.find();
    res.status(200).send(tutorials);
  } catch (error) {
    res.status(500).send(error);
  }
};


export const getTutorialById = async (req, res) => {
  try {
    const tutorial = await Tutorial.findById(req.params.id);
    if (!tutorial) {
      return res.status(404).send({ message: "Tutorial not found" });
    }
    res.status(200).send(tutorial);
  } catch (error) {
    res.status(500).send(error);
  }
};
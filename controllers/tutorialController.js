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

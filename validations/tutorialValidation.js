import Joi from "joi";

const tutorialSchema = Joi.object({
    title: Joi.string().required(),
    introduction: Joi.string().required(),
    whatIs: Joi.string().required(),
    statements: Joi.string().required(),
    syntax: Joi.string().required(),
    comments: Joi.string().required(),
    variables: Joi.string().required(),
    dataTypes: Joi.string().required()
})

export default tutorialSchema;
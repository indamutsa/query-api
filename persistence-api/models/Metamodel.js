const mongoose = require("mongoose");
const Joi = require("joi");

require("mongoose-double")(mongoose);
const { Schema } = mongoose;

// Create a schema
const metamodelSchema = new Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 50,
  },
  project: {
    type: Schema.Types.ObjectId,
    ref: "Project",
  },
  type: {
    type: String,
    enum: ["ECORE", "MPS"],
  },
  models: [
    {
      type: Schema.Types.ObjectId,
      ref: "Model",
    },
  ],
  artifact: {
    type: Schema.Types.ObjectId,
    ref: "Artifact",
  },
  involvedOperations: [
    {
      type: String,
      ref: "Transformation",
    },
  ],
  content: {
    type: String,
  },
  // Internal properties
  ePackage: {
    name: {
      type: String,
    },
    nsURI: {
      type: String,
    },
    nsPrefix: {
      type: String,
    },
  },
  eClass: [],
});

// Create the model
const Metamodel = mongoose.model("Metamodel", metamodelSchema);

// Export the model
exports.Metamodel = Metamodel;

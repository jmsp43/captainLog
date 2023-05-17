const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const model = mongoose.model;

const logSchema = new Schema(
     {
     _id: String,
    title: String,
    entry: String,
    shipIsBroken: { type: Boolean, default: true },
  },
  { timestamps: true }
);

const Log = model("Log", logSchema);

module.exports = Log;

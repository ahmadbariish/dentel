const mongoose = require('mongoose');
const { SpecializeEnum } = require('../utils/enum');
const serviceSchema = new mongoose.Schema(
  {
    // <creating-property-schema />
    descreption: {
      type: String,
      required: [true, 'Please enter name  descreption'],
    },
    specialize: {
      type: String,
      enum: Object.values(SpecializeEnum),
      required: [true, 'Please enter specialize'],
    },
    name: {
      type: String,
      required: [true, 'Please enter name  name'],
    },
  },
  { timestamps: true, versionKey: false },
);
// <creating-function-schema />

const Service = mongoose.model('Service', serviceSchema);
module.exports = Service;

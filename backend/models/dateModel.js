const mongoose = require('mongoose');
const { SpecializeEnum } = require('../utils/enum');
const dateSchema = new mongoose.Schema(
  {
    canceled: {
      type: Boolean,
      default: false,
    },

    date: {
      required: [true, 'must enter date'],
      type: Date,
    },
    service: {
      required: [true, 'must enter service'],
      type: mongoose.Schema.ObjectId,
      ref: 'Service',
    },
    diagnosis: {
      type: String,
    },
    day: {
      required: [true, 'must enter day'],
      anum: [
        'sunday',
        'monday',
        'tuesday',
        'wednesday',
        'thursday',
        'friday',
        'saturday',
      ],
      type: String,
    },
    hour: {
      required: [true, 'must enter hour'],
      type: Number,
    },
    minute: {
      required: [true, 'must enter minute'],
      type: Number,
    },
    pataint: {
      required: [true, 'must enter pataint'],
      type: mongoose.Schema.ObjectId,
      ref: 'User',
    },
    doctor: {
      required: [true, 'must enter doctor'],
      type: mongoose.Schema.ObjectId,
      ref: 'User',
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);
const Dates = mongoose.model('Dates', dateSchema);
module.exports = Dates;

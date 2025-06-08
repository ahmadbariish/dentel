const mongoose = require('mongoose');
const reviwSchema = new mongoose.Schema(
  {
    // <creating-property-schema />
    userId: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: [true, 'Please enter name  user'],
    },
    rate: {
      type: Number,
      min: 1,
      max: 5,
      required: [true, 'Please enter name  rate'],
    },
    message: {
      type: String,
      required: [true, 'Please enter name  message'],
    },
  },
  { timestamps: true, versionKey: false },
);
// <creating-function-schema />
reviwSchema.pre(/^find/, function (next) {
  this.populate({
    path: 'userId',
    select: 'name photo -_id',
  });
  next();
});

const Reviw = mongoose.model('Reviw', reviwSchema);
module.exports = Reviw;

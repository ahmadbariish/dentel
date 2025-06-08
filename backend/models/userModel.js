const Reviw = require('./reviwModel');
const crypto = require('crypto');
const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const { RoleCode, SpecializeEnum } = require('../utils/enum');
const userSchema = new mongoose.Schema(
  {
    // <creating-property-schema />
    phone: {
      type: String,
      required: [true, 'Please enter name  phone'],
      unique: true,
    },
    name: {
      type: String,
      required: [true, 'Please tell us your name!'],
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'Please provide your email'],
      unique: true,
      lowercase: true,
      validate: [validator.isEmail, 'Please provide a valid email'],
    },
    date: [
      {
        first: {
          required: [true, 'must enter first time'],
          type: Number,
        },
        last: {
          required: [true, 'must enter last time'],
          type: Number,
        },
        day: {
          required: [true, 'must enter day'],
          anum: [
            'sunday',
            'monday',
            '  ',
            'wednesday',
            'thursday',
            'friday',
            'saturday',
          ],
          type: String,
        },
      },
    ],
    photo: {
      type: String,
      default: 'default.jpg',
    },
    role: {
      type: String,
      enum: Object.values(RoleCode),
      default: 'USER',
    },
    password: {
      type: String,
      required: [true, 'Please provide a password'],
      minlength: 8,
      select: false,
    },
    specialize: {
      type: String,
      enum: Object.values(SpecializeEnum),
    },
    passwordChangedAt: Date,
    passwordResetToken: String,
    passwordResetExpires: Date,
    active: {
      type: Boolean,
      default: true,
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
  },
  { versionKey: false },
);
// <creating-function-schema />
userSchema.post('findOneAndDelete', async function (doc) {
  if (doc) {
    try {
      await Reviw.deleteMany({ userId: doc._id });
    } catch (error) {
      return next(new AppError('error deleting reviwss', 500));
    }
  }
});

userSchema.pre('save', async function (next) {
  // Only run this function if password was actually modified
  if (!this.isModified('password')) return next();
  // Hash the password with cost of 12
  this.password = await bcrypt.hash(this.password, 12);
  next();
});
userSchema.pre('save', function (next) {
  if (!this.isModified('password') || this.isNew) return next();
  this.passwordChangedAt = Date.now() - 1000;
  next();
});

userSchema.methods.correctPassword = async function (
  candidatePassword,
  userPassword,
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};
userSchema.methods.changedPasswordAfter = function (JWTTimestamp) {
  if (this.passwordChangedAt) {
    const changedTimestamp = parseInt(
      this.passwordChangedAt.getTime() / 1000,
      10,
    );
    return JWTTimestamp < changedTimestamp;
  }
  // False means NOT changed
  return false;
};
userSchema.methods.createPasswordResetToken = function () {
  const resetToken = crypto.randomBytes(32).toString('hex');
  this.passwordResetToken = crypto
    .createHash('sha256')
    .update(resetToken)
    .digest('hex');
  this.passwordResetExpires = Date.now() + 10 * 60 * 1000;
  return resetToken;
};
const User = mongoose.model('User', userSchema);
module.exports = User;

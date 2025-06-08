const User = require('../models/userModel');
const Dates = require('../models/dateModel');
const { WeekDay } = require('../class/weekDay');
const AppError = require('../utils/appError');
const handlerFactory = require('../utils/handlerFactory');
const catchAsync = require('../utils/catchAsync');
const { dateClass } = require('../class/dateClass');
exports.getdate = handlerFactory.getOne(Dates);
exports.createdate = catchAsync(async (req, res, next) => {
  req.body.pataint = req.user._id;
  const doc = await Dates.create(req.body);
  res.status(201).json({
    status: 'succsess',
    doc,
  });
});

exports.updatedate = handlerFactory.updateOne(Dates);
exports.deletedate = handlerFactory.deleteOne(Dates);
exports.getDateDoctor = catchAsync(async (req, res, next) => {
  const doc = await Dates.find(
    {
      date: { $gte: Date.now() },
      doctor: req.user._id,
    },
    { doctor: 0 },
  )
    .populate({ path: 'pataint', select: 'name photo -_id' })
    .populate({ path: 'service', select: 'name -_id' });
  // SEND RESPONSE
  res.status(200).json({
    status: 'success',
    results: doc.length,
    doc,
  });
});
exports.getAlldate = handlerFactory.getAllpop1(
  Dates,
  { path: 'doctor', select: 'name photo -_id' },
  { path: 'service', select: 'name -_id' },
);
exports.available = catchAsync(async (req, res, next) => {
  const doctor = await User.findById(req.params.id);
  const alldate = await Dates.find({
    canceled: false,
    date: { $gte: Date.now() },
    doctor: req.params.id,
  });
  const dateMain = doctor.date;
  if (!doctor) {
    return new AppError('doctor is not found with ID', 400);
  }
  const freeDate = dateFree(dateMain, alldate, 30);
  res.status(200).json({
    status: 'success',
    count: freeDate.length,
    freeDate,
  });
});

const dateFree = (all, take, duration) => {
  let data = [];
  all.forEach((element) => {
    let numSession = ((element.last - element.first) * 60) / duration; //عدد الجلسات خلال يوم
    for (let k = 0; k < 7; k++) {
      let newDate = new Date();
      newDate.setDate(k + newDate.getDate());
      if (newDate.getDay() === WeekDay[element.day])
        for1: for (let i = 0; i < numSession; i++) {
          //تحديد تاريخ الجلسة
          const setDate = new Date(
            newDate.getFullYear(),
            newDate.getMonth(),
            newDate.getDate(),
            element.first + Math.trunc((i * duration) / 60),
            (i * duration) % 60,
            0,
          );
          for (let i = 0; i < take.length; i++)
            if (setDate.toString() == take[i].date.toString()) {
              continue for1;
            }
          //شرط ليقارن الساعة الحالية ليعيد المواعيد من بعد الساعة الحالية في حال كان هنالك شاغر في نفس اليوم
          if (
            (new Date().getDay() === WeekDay[element.day] &&
              element.first + Math.trunc((i * duration) / 60) <
                new Date().getHours()) ||
            (new Date().getDay() === WeekDay[element.day] &&
              element.first + Math.trunc((i * duration) / 60) ==
                new Date().getHours() &&
              (i * duration) % 60 < new Date().getMinutes())
          )
            continue;
          data.push(
            new dateClass(
              setDate,
              element.day,
              element.first + Math.trunc((i * duration) / 60),
              (i * duration) % 60,
            ),
          );
        }
    }
  });
  return data;
};

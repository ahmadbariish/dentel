const dateController = require('../controllers/dateController');
const {
  protect,
  restrictTo,
  isactive,
} = require('./../middlewares/authMiddlewers');
const { addVarBody, addQuery } = require('./../middlewares/dynamicMiddleware');
const { checkOwner } = require('./../middlewares/checkMiddleware');
const express = require('express');
const Dates = require('../models/dateModel');
const { User } = require('../swagger/routes/users');
const { RoleCode } = require('../utils/enum');
const { USER, DOCTOR, ADMIN } = RoleCode;

const router = express.Router();
router.use(protect);
router.route('/doctor/:id/available').get(isactive, dateController.available);
router
  .route('/mineForUser')
  .get(
    restrictTo(USER),
    addQuery('pataint', 'userId'),
    addQuery('fields', '-pataint'),
    isactive,
    dateController.getAlldate,
  );
router
  .route('/mineForDoctor')
  .get(restrictTo('DOCTOR'), isactive, dateController.getDateDoctor);
router
  .route('/')
  .get(restrictTo(ADMIN), dateController.getAlldate)
  .post(restrictTo(USER), isactive, dateController.createdate);
router
  .route('/canceled/:id')
  .patch(
    restrictTo(USER),
    isactive,
    checkOwner(Dates, 'pataint', 'id'),
    addVarBody('canceled', true),
    dateController.updatedate,
  );

router
  .route('/:id')
  .get(dateController.getdate)
  .patch(restrictTo(DOCTOR), dateController.updatedate)
  .delete(restrictTo(ADMIN), dateController.deletedate);
module.exports = router;

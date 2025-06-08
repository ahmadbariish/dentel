const reviwController = require('../controllers/reviwController');
const { protect, restrictTo } = require('./../middlewares/authMiddlewers');
const { addVarBody } = require('./../middlewares/dynamicMiddleware');
const { RoleCode } = require('./../utils/enum');
const { USER, DOCTOR, ADMIN } = RoleCode;
const express = require('express');
const router = express.Router();
router.use(protect);
router
  .route('/')
  .get(restrictTo(USER, DOCTOR, ADMIN), reviwController.getAllReviw)
  .post(
    restrictTo(USER),
    addVarBody('userId', 'userId'),
    reviwController.createReviw,
  );
router
  .route('/:id')
  .get(restrictTo(USER, DOCTOR, ADMIN), reviwController.getReviw)
  // .patch(restrictTo(USER), reviwController.updateReviw)
  .delete(restrictTo(ADMIN), reviwController.deleteReviw);
module.exports = router;

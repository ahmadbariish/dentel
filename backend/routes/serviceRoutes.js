const serviceController = require('../controllers/serviceController');
const { protect, restrictTo } = require('./../middlewares/authMiddlewers');
const { RoleCode } = require('./../utils/enum');
const { USER, DOCTOR, ADMIN } = RoleCode;
const express = require('express');
const router = express.Router();
router.use(protect);
router
  .route('/')
  .get(restrictTo(USER, DOCTOR, ADMIN), serviceController.getAllService)
  .post(restrictTo(ADMIN), serviceController.createService);
router
  .route('/:id')
  .get(restrictTo(USER, ADMIN), serviceController.getService)
  .patch(restrictTo(ADMIN), serviceController.updateService)
  .delete(restrictTo(ADMIN), serviceController.deleteService);
module.exports = router;

const express = require('express');
const router = express.Router();
const shippingController = require('../../../controller/desktop/v1/shipping');
const { auth, } = require('../../../middleware');
const { PLATFORM } =  require('../../../constants/authConstant'); 

router.route('/desktop/api/v1/shipping/create').post(shippingController.addShipping);
router.route('/desktop/api/v1/shipping/list').post(shippingController.findAllShipping);
router.route('/desktop/api/v1/shipping/count').post(shippingController.getShippingCount);
router.route('/desktop/api/v1/shipping/softDeleteMany').put(shippingController.softDeleteManyShipping);
router.route('/desktop/api/v1/shipping/addBulk').post(shippingController.bulkInsertShipping);
router.route('/desktop/api/v1/shipping/updateBulk').put(shippingController.bulkUpdateShipping);
router.route('/desktop/api/v1/shipping/deleteMany').post(shippingController.deleteManyShipping);
router.route('/desktop/api/v1/shipping/softDelete/:id').put(shippingController.softDeleteShipping);
router.route('/desktop/api/v1/shipping/partial-update/:id').put(shippingController.partialUpdateShipping);  
router.route('/desktop/api/v1/shipping/update/:id').put(shippingController.updateShipping);  
router.route('/desktop/api/v1/shipping/:id').get(shippingController.getShippingById);
router.route('/desktop/api/v1/shipping/delete/:id').delete(shippingController.deleteShipping);

module.exports = router;

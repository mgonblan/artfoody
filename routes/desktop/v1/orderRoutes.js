const express = require('express');
const router = express.Router();
const orderController = require('../../../controller/desktop/v1/order');
const { auth, } = require('../../../middleware');
const { PLATFORM } =  require('../../../constants/authConstant'); 

router.route('/desktop/api/v1/order/create').post(orderController.addOrder);
router.route('/desktop/api/v1/order/list').post(orderController.findAllOrder);
router.route('/desktop/api/v1/order/count').post(orderController.getOrderCount);
router.route('/desktop/api/v1/order/softDeleteMany').put(orderController.softDeleteManyOrder);
router.route('/desktop/api/v1/order/addBulk').post(orderController.bulkInsertOrder);
router.route('/desktop/api/v1/order/updateBulk').put(orderController.bulkUpdateOrder);
router.route('/desktop/api/v1/order/deleteMany').post(orderController.deleteManyOrder);
router.route('/desktop/api/v1/order/softDelete/:id').put(orderController.softDeleteOrder);
router.route('/desktop/api/v1/order/partial-update/:id').put(orderController.partialUpdateOrder);  
router.route('/desktop/api/v1/order/update/:id').put(orderController.updateOrder);  
router.route('/desktop/api/v1/order/:id').get(orderController.getOrderById);
router.route('/desktop/api/v1/order/delete/:id').delete(orderController.deleteOrder);

module.exports = router;

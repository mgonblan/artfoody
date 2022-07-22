const express = require('express');
const router = express.Router();
const cartController = require('../../../controller/desktop/v1/cart');
const { auth, } = require('../../../middleware');
const { PLATFORM } =  require('../../../constants/authConstant'); 

router.route('/desktop/api/v1/cart/create').post(cartController.addCart);
router.route('/desktop/api/v1/cart/list').post(cartController.findAllCart);
router.route('/desktop/api/v1/cart/count').post(cartController.getCartCount);
router.route('/desktop/api/v1/cart/softDeleteMany').put(cartController.softDeleteManyCart);
router.route('/desktop/api/v1/cart/addBulk').post(cartController.bulkInsertCart);
router.route('/desktop/api/v1/cart/updateBulk').put(cartController.bulkUpdateCart);
router.route('/desktop/api/v1/cart/deleteMany').post(cartController.deleteManyCart);
router.route('/desktop/api/v1/cart/softDelete/:id').put(cartController.softDeleteCart);
router.route('/desktop/api/v1/cart/partial-update/:id').put(cartController.partialUpdateCart);  
router.route('/desktop/api/v1/cart/update/:id').put(cartController.updateCart);  
router.route('/desktop/api/v1/cart/:id').get(cartController.getCartById);
router.route('/desktop/api/v1/cart/delete/:id').delete(cartController.deleteCart);

module.exports = router;

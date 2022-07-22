const express = require('express');
const router = express.Router();
const productController = require('../../../controller/desktop/v1/product');
const { auth, } = require('../../../middleware');
const { PLATFORM } =  require('../../../constants/authConstant'); 

router.route('/desktop/api/v1/product/create').post(productController.addProduct);
router.route('/desktop/api/v1/product/list').post(productController.findAllProduct);
router.route('/desktop/api/v1/product/count').post(productController.getProductCount);
router.route('/desktop/api/v1/product/softDeleteMany').put(productController.softDeleteManyProduct);
router.route('/desktop/api/v1/product/addBulk').post(productController.bulkInsertProduct);
router.route('/desktop/api/v1/product/updateBulk').put(productController.bulkUpdateProduct);
router.route('/desktop/api/v1/product/deleteMany').post(productController.deleteManyProduct);
router.route('/desktop/api/v1/product/softDelete/:id').put(productController.softDeleteProduct);
router.route('/desktop/api/v1/product/partial-update/:id').put(productController.partialUpdateProduct);  
router.route('/desktop/api/v1/product/update/:id').put(productController.updateProduct);  
router.route('/desktop/api/v1/product/:id').get(productController.getProductById);
router.route('/desktop/api/v1/product/delete/:id').delete(productController.deleteProduct);

module.exports = router;

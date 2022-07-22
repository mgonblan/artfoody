const express = require('express');
const router = express.Router();
const pincodeController = require('../../../controller/desktop/v1/pincode');
const { auth, } = require('../../../middleware');
const { PLATFORM } =  require('../../../constants/authConstant'); 

router.route('/desktop/api/v1/pincode/create').post(pincodeController.addPincode);
router.route('/desktop/api/v1/pincode/list').post(pincodeController.findAllPincode);
router.route('/desktop/api/v1/pincode/count').post(pincodeController.getPincodeCount);
router.route('/desktop/api/v1/pincode/softDeleteMany').put(pincodeController.softDeleteManyPincode);
router.route('/desktop/api/v1/pincode/addBulk').post(pincodeController.bulkInsertPincode);
router.route('/desktop/api/v1/pincode/updateBulk').put(pincodeController.bulkUpdatePincode);
router.route('/desktop/api/v1/pincode/deleteMany').post(pincodeController.deleteManyPincode);
router.route('/desktop/api/v1/pincode/softDelete/:id').put(pincodeController.softDeletePincode);
router.route('/desktop/api/v1/pincode/partial-update/:id').put(pincodeController.partialUpdatePincode);  
router.route('/desktop/api/v1/pincode/update/:id').put(pincodeController.updatePincode);  
router.route('/desktop/api/v1/pincode/:id').get(pincodeController.getPincodeById);
router.route('/desktop/api/v1/pincode/delete/:id').delete(pincodeController.deletePincode);

module.exports = router;

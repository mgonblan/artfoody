const express = require('express');
const router = express.Router();
const cityController = require('../../../controller/desktop/v1/city');
const { auth, } = require('../../../middleware');
const { PLATFORM } =  require('../../../constants/authConstant'); 

router.route('/desktop/api/v1/city/create').post(cityController.addCity);
router.route('/desktop/api/v1/city/list').post(cityController.findAllCity);
router.route('/desktop/api/v1/city/count').post(cityController.getCityCount);
router.route('/desktop/api/v1/city/softDeleteMany').put(cityController.softDeleteManyCity);
router.route('/desktop/api/v1/city/addBulk').post(cityController.bulkInsertCity);
router.route('/desktop/api/v1/city/updateBulk').put(cityController.bulkUpdateCity);
router.route('/desktop/api/v1/city/deleteMany').post(cityController.deleteManyCity);
router.route('/desktop/api/v1/city/softDelete/:id').put(cityController.softDeleteCity);
router.route('/desktop/api/v1/city/partial-update/:id').put(cityController.partialUpdateCity);  
router.route('/desktop/api/v1/city/update/:id').put(cityController.updateCity);  
router.route('/desktop/api/v1/city/:id').get(cityController.getCityById);
router.route('/desktop/api/v1/city/delete/:id').delete(cityController.deleteCity);

module.exports = router;

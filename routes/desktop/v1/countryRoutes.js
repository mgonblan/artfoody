const express = require('express');
const router = express.Router();
const countryController = require('../../../controller/desktop/v1/country');
const { auth, } = require('../../../middleware');
const { PLATFORM } =  require('../../../constants/authConstant'); 

router.route('/desktop/api/v1/country/create').post(countryController.addCountry);
router.route('/desktop/api/v1/country/list').post(countryController.findAllCountry);
router.route('/desktop/api/v1/country/count').post(countryController.getCountryCount);
router.route('/desktop/api/v1/country/softDeleteMany').put(countryController.softDeleteManyCountry);
router.route('/desktop/api/v1/country/addBulk').post(countryController.bulkInsertCountry);
router.route('/desktop/api/v1/country/updateBulk').put(countryController.bulkUpdateCountry);
router.route('/desktop/api/v1/country/deleteMany').post(countryController.deleteManyCountry);
router.route('/desktop/api/v1/country/softDelete/:id').put(countryController.softDeleteCountry);
router.route('/desktop/api/v1/country/partial-update/:id').put(countryController.partialUpdateCountry);  
router.route('/desktop/api/v1/country/update/:id').put(countryController.updateCountry);  
router.route('/desktop/api/v1/country/:id').get(countryController.getCountryById);
router.route('/desktop/api/v1/country/delete/:id').delete(countryController.deleteCountry);

module.exports = router;

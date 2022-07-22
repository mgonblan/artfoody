const express = require('express');
const router = express.Router();
const bannerController = require('../../../controller/desktop/v1/banner');
const { auth, } = require('../../../middleware');
const { PLATFORM } =  require('../../../constants/authConstant'); 

router.route('/desktop/api/v1/banner/create').post(bannerController.addBanner);
router.route('/desktop/api/v1/banner/list').post(bannerController.findAllBanner);
router.route('/desktop/api/v1/banner/count').post(bannerController.getBannerCount);
router.route('/desktop/api/v1/banner/softDeleteMany').put(bannerController.softDeleteManyBanner);
router.route('/desktop/api/v1/banner/addBulk').post(bannerController.bulkInsertBanner);
router.route('/desktop/api/v1/banner/updateBulk').put(bannerController.bulkUpdateBanner);
router.route('/desktop/api/v1/banner/deleteMany').post(bannerController.deleteManyBanner);
router.route('/desktop/api/v1/banner/softDelete/:id').put(bannerController.softDeleteBanner);
router.route('/desktop/api/v1/banner/partial-update/:id').put(bannerController.partialUpdateBanner);  
router.route('/desktop/api/v1/banner/update/:id').put(bannerController.updateBanner);  
router.route('/desktop/api/v1/banner/:id').get(bannerController.getBannerById);
router.route('/desktop/api/v1/banner/delete/:id').delete(bannerController.deleteBanner);

module.exports = router;

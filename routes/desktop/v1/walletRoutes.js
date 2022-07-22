const express = require('express');
const router = express.Router();
const walletController = require('../../../controller/desktop/v1/wallet');
const { auth, } = require('../../../middleware');
const { PLATFORM } =  require('../../../constants/authConstant'); 

router.route('/desktop/api/v1/wallet/create').post(walletController.addWallet);
router.route('/desktop/api/v1/wallet/list').post(walletController.findAllWallet);
router.route('/desktop/api/v1/wallet/count').post(walletController.getWalletCount);
router.route('/desktop/api/v1/wallet/softDeleteMany').put(walletController.softDeleteManyWallet);
router.route('/desktop/api/v1/wallet/addBulk').post(walletController.bulkInsertWallet);
router.route('/desktop/api/v1/wallet/updateBulk').put(walletController.bulkUpdateWallet);
router.route('/desktop/api/v1/wallet/deleteMany').post(walletController.deleteManyWallet);
router.route('/desktop/api/v1/wallet/softDelete/:id').put(walletController.softDeleteWallet);
router.route('/desktop/api/v1/wallet/partial-update/:id').put(walletController.partialUpdateWallet);  
router.route('/desktop/api/v1/wallet/update/:id').put(walletController.updateWallet);  
router.route('/desktop/api/v1/wallet/:id').get(walletController.getWalletById);
router.route('/desktop/api/v1/wallet/delete/:id').delete(walletController.deleteWallet);

module.exports = router;

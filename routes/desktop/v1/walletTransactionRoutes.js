const express = require('express');
const router = express.Router();
const walletTransactionController = require('../../../controller/desktop/v1/walletTransaction');
const { auth, } = require('../../../middleware');
const { PLATFORM } =  require('../../../constants/authConstant'); 

router.route('/desktop/api/v1/wallettransaction/create').post(walletTransactionController.addWalletTransaction);
router.route('/desktop/api/v1/wallettransaction/list').post(walletTransactionController.findAllWalletTransaction);
router.route('/desktop/api/v1/wallettransaction/count').post(walletTransactionController.getWalletTransactionCount);
router.route('/desktop/api/v1/wallettransaction/softDeleteMany').put(walletTransactionController.softDeleteManyWalletTransaction);
router.route('/desktop/api/v1/wallettransaction/addBulk').post(walletTransactionController.bulkInsertWalletTransaction);
router.route('/desktop/api/v1/wallettransaction/updateBulk').put(walletTransactionController.bulkUpdateWalletTransaction);
router.route('/desktop/api/v1/wallettransaction/deleteMany').post(walletTransactionController.deleteManyWalletTransaction);
router.route('/desktop/api/v1/wallettransaction/softDelete/:id').put(walletTransactionController.softDeleteWalletTransaction);
router.route('/desktop/api/v1/wallettransaction/partial-update/:id').put(walletTransactionController.partialUpdateWalletTransaction);  
router.route('/desktop/api/v1/wallettransaction/update/:id').put(walletTransactionController.updateWalletTransaction);  
router.route('/desktop/api/v1/wallettransaction/:id').get(walletTransactionController.getWalletTransactionById);
router.route('/desktop/api/v1/wallettransaction/delete/:id').delete(walletTransactionController.deleteWalletTransaction);

module.exports = router;

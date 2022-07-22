const express = require('express');
const router = express.Router();
const stateController = require('../../../controller/desktop/v1/state');
const { auth, } = require('../../../middleware');
const { PLATFORM } =  require('../../../constants/authConstant'); 

router.route('/desktop/api/v1/state/create').post(stateController.addState);
router.route('/desktop/api/v1/state/list').post(stateController.findAllState);
router.route('/desktop/api/v1/state/count').post(stateController.getStateCount);
router.route('/desktop/api/v1/state/softDeleteMany').put(stateController.softDeleteManyState);
router.route('/desktop/api/v1/state/addBulk').post(stateController.bulkInsertState);
router.route('/desktop/api/v1/state/updateBulk').put(stateController.bulkUpdateState);
router.route('/desktop/api/v1/state/deleteMany').post(stateController.deleteManyState);
router.route('/desktop/api/v1/state/softDelete/:id').put(stateController.softDeleteState);
router.route('/desktop/api/v1/state/partial-update/:id').put(stateController.partialUpdateState);  
router.route('/desktop/api/v1/state/update/:id').put(stateController.updateState);  
router.route('/desktop/api/v1/state/:id').get(stateController.getStateById);
router.route('/desktop/api/v1/state/delete/:id').delete(stateController.deleteState);

module.exports = router;

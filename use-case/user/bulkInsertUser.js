
/**
 *bulkInsertUser.js
 */

const authConstant = require('../../constants/authConstant');
const  userEntity = require('../../entities/user');
const response = require('../../utils/response');

/**
 * @description : create multiple records  in database.
 * @param {Object} dataToCreate : data for creating documents.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : created Users. {status, message, data}
 */

const bulkInsertUser = ({
  userDb,roleDb,userRoleDb
}) => async (dataToCreate,req,res) => {
  let userEntities = dataToCreate.map(item => userEntity(item));
  let createdUser = await userDb.create(userEntities);
  if (createdUser && createdUser.length) {
    const defaultRole = await roleDb.findOne({ name: authConstant.DEFAULT_USER_ROLE });
    let userRoleData = createdUser.map(r => {
      if (r.id) {
        return {
          userId: r.id,
          roleId: defaultRole.id
        };
      }
    });
    if (userRoleData.length){
      await userRoleDb.create(userRoleData);
    }
  }
  return response.success({ data:{ count:createdUser.length || 0 } });
};
module.exports = bulkInsertUser;
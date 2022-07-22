/**
 *addUser.js
 */

const authConstant = require('../../constants/authConstant');
const  userEntity = require('../../entities/user');
const response = require('../../utils/response');
/**
 * @description : create new record of user in database.
 * @param {Object} dataToCreate : data for create new document.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : response of create. {status, message, data}
 */
const addUser = ({
  userDb,roleDb,userRoleDb,createValidation 
}) => async (dataToCreate,req,res) => {
  const validateRequest = await createValidation(dataToCreate);
  if (!validateRequest.isValid) {
    return response.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
  }
  let user = userEntity(dataToCreate);
  user = await userDb.create(user);
  if (user && user.id){
    const defaultRole = await roleDb.findOne({ name: authConstant.DEFAULT_USER_ROLE });
    if (defaultRole && defaultRole.id){
      await userRoleDb.create({
        userId: user.id,
        roleId: defaultRole.id
      });
    }
  }
  return response.success({ data:user });
};
module.exports = addUser;
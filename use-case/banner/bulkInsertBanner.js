
/**
 *bulkInsertBanner.js
 */

const  bannerEntity = require('../../entities/banner');
const response = require('../../utils/response');

/**
 * @description : create multiple records  in database.
 * @param {Object} dataToCreate : data for creating documents.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : created Banners. {status, message, data}
 */

const bulkInsertBanner = ({ bannerDb }) => async (dataToCreate,req,res) => {
  let bannerEntities = dataToCreate.map(item => bannerEntity(item));
  let createdBanner = await bannerDb.create(bannerEntities);
  return response.success({ data:{ count:createdBanner.length || 0 } });
};
module.exports = bulkInsertBanner;
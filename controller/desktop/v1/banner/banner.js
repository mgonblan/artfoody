const response = require('../../../../utils/response'); 
const responseHandler = require('../../../../utils/response/responseHandler'); 
const getSelectObject = require('../../../../utils/getSelectObject'); 

const addBanner = (addBannerUsecase) => async (req,res) => {
  try {
    let dataToCreate = { ...req.body || {} };
    let result = await addBannerUsecase(dataToCreate,req,res);
    return responseHandler(res,result);
  } catch (error){
    return responseHandler(res,response.internalServerError({ message:error.message }));
  }
};

const bulkInsertBanner = (bulkInsertBannerUsecase)=> async (req,res) => {
  try {
    let dataToCreate = [...req.body.data];
    let result = await bulkInsertBannerUsecase(dataToCreate,req,res);
    return responseHandler(res,result);
  } catch (error){
    return responseHandler(res,response.internalServerError({ message:error.message }));
  }
};

const findAllBanner = (findAllBannerUsecase) => async (req,res) => {
  try {
    let query = { ...req.body.query || {} };
    let options = { ...req.body.options || {} };
    let result = await findAllBannerUsecase({
      query,
      options,
      isCountOnly:req.body.isCountOnly || false
    },req,res);
    return responseHandler(res,result);
  } catch (error){
    return responseHandler(res,response.internalServerError({ message:error.message }));
  }
};

const getBanner = (getBannerUsecase) => async (req,res) =>{
  try {
    if (!req.params.id){
      return responseHandler(res,response.badRequest());
    }
    let query = { _id: req.params.id };
    let options = {};
    let result = await getBannerUsecase({
      query,
      options
    },req,res);
    return responseHandler(res,result);
  } catch (error) {
    return responseHandler(res,response.internalServerError({ message:error.message }));
  }
};

const getBannerCount = (getBannerCountUsecase) => async (req,res) => {
  try {
    let where = { ...req.body.where || {} };
    let result = await getBannerCountUsecase({ where },req,res);  
    return responseHandler(res,result);
  } catch (error){
    return responseHandler(res,response.internalServerError({ message:error.message }));
  }
};

const updateBanner = (updateBannerUsecase) => async (req,res) =>{
  try {
    if (!req.params.id){
      return responseHandler(res,response.badRequest({ message : 'Insufficient request parameters! id is required.' }));
    }
    let dataToUpdate = { ...req.body || {} };
    let query = { _id: req.params.id };
    let result = await updateBannerUsecase({
      dataToUpdate,
      query
    },req,res);
    return responseHandler(res,result);
  } catch (error){
    return responseHandler(res,response.internalServerError({ message:error.message }));
  }
};

const bulkUpdateBanner = (bulkUpdateBannerUsecase) => async (req,res) => {
  try {
    let dataToUpdate = { ...req.body.data || {} };
    let query = { ...req.body.filter || {} };
    let result = await bulkUpdateBannerUsecase({
      dataToUpdate,
      query
    },req,res);
    return responseHandler(res,result);
  } catch (error){
    return responseHandler(res,response.internalServerError({ message:error.message }));
  }
};

const partialUpdateBanner = (partialUpdateBannerUsecase) => async (req,res) => {
  try {
    if (!req.params.id){
      return responseHandler(res,response.badRequest({ message : 'Insufficient request parameters! id is required.' }));
    }
    let query = { _id: req.params.id };
    let dataToUpdate = { ...req.body || {} };
    let result = await partialUpdateBannerUsecase({
      dataToUpdate,
      query
    },req,res);
    return responseHandler(res,result);
  } catch (error){
    return responseHandler(res,response.internalServerError({ message:error.message }));
  }
};

const softDeleteBanner = (softDeleteBannerUsecase) => async (req,res)=>{
  try {
    if (!req.params.id){
      return responseHandler(res,response.badRequest({ message : 'Insufficient request parameters! id is required.' }));
    }
    let query = { _id: req.params.id };
    const dataToUpdate = { isDeleted: true, };
    let result = await softDeleteBannerUsecase({
      query,
      dataToUpdate
    },req,res);
    return responseHandler(res,result);
  } catch (error){
    return responseHandler(res,response.internalServerError({ message:error.message }));
  }
};

const deleteBanner = (deleteBannerUsecase) => async (req,res) => {
  try {
    if (!req.params.id){
      return responseHandler(res,response.badRequest({ message : 'Insufficient request parameters! id is required.' }));
    }
    let query = { _id: req.params.id };
    let result = await deleteBannerUsecase(query,req,res);
    return responseHandler(res,result);
  } catch (error){
    return responseHandler(res,response.internalServerError({ message:error.message }));
  }
};

const deleteManyBanner = (deleteManyBannerUsecase) => async (req,res) => {
  try {
    if (!req.body || !req.body.ids){
      return responseHandler(res,response.badRequest({ message : 'Insufficient request parameters! ids field is required.' }));
    }
    let ids = req.body.ids;
    let query = { _id : { $in:ids } };
    let result = await deleteManyBannerUsecase(query,req,res);
    return responseHandler(res,result);
  } catch (error){
    return responseHandler(res,response.internalServerError({ message:error.message }));
  }
};

const softDeleteManyBanner = (softDeleteManyBannerUsecase) => async (req,res) => {
  try {
    if (!req.body || !req.body.ids){
      return responseHandler(res,response.badRequest({ message : 'Insufficient request parameters! ids field is required.' }));
    }
    let ids = req.body.ids;
    let query = { _id : { $in:ids } };
    const dataToUpdate = { isDeleted: true, };
    let result = await softDeleteManyBannerUsecase({
      query,
      dataToUpdate
    },req,res);
    return responseHandler(res,result);
  } catch (error){
    return responseHandler(res,response.internalServerError({ message:error.message }));
  }
};

module.exports = {
  addBanner,
  bulkInsertBanner,
  findAllBanner,
  getBanner,
  getBannerCount,
  updateBanner,
  bulkUpdateBanner,
  partialUpdateBanner,
  softDeleteBanner,
  deleteBanner,
  deleteManyBanner,
  softDeleteManyBanner
};

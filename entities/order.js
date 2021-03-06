module.exports = (order) => {

  let newOrder = { 
    customerId: order.customerId,
    sellerId: order.sellerId,
    orderItems: order.orderItems,
    totalAmount: order.totalAmount,
    status: order.status,
    isActive: order.isActive,
    createdAt: order.createdAt,
    updatedAt: order.updatedAt,
    addedBy: order.addedBy,
    updatedBy: order.updatedBy,
    isDeleted: order.isDeleted,
  };

  // remove undefined values
  Object.keys(newOrder).forEach(key => newOrder[key] === undefined && delete newOrder[key]);

  // To validate Entity uncomment this block
  /*
   * const validate = (newOrder) => {
   *   if (!newOrder.field) {
   *       throw new Error("this field is required");
   *   }
   * }
   * validate(newOrder) 
   */

  return Object.freeze(newOrder);
};

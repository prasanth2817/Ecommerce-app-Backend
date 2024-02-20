import OrderModel from "../Models/Orders.js";

const createOrders= async(req,res)=>{
try {
    const {userId,products}= req.body
    if (!Array.isArray(products)) {
        throw new Error('Products must be an array.');
      }
  
      const productIds = products.map(product => {
        if (typeof product !== 'object' || !product.productId) {
          throw new Error('Invalid product data.');
        }
        return product.productId;
      });

        const newOrder = new OrderModel({
            userId,
            products: productIds, // Save only product IDs as strings
        });
    await newOrder.save()
    res.status(201).send({
        message: 'order received Successfully',
        Order: newOrder,
    })
} catch (error) {
    console.error('Error:', error);
    res.status(500).send({
      error: error.message,
      message: 'Error in creating orders',
    });
}
}

export default createOrders
import OrderModel from "../Models/Orders.js";

const createOrders = async (req, res) => {
  try {
      const { email, products } = req.body;

      // Check if email is missing or products is not an array
      if (!email || !Array.isArray(products)) {
          throw new Error('Invalid Data');
      }

      // Extract productIds from products array
      const productIds = products.map(product => {
          // Ensure each product has a productId property
          if (typeof product !== 'object' || !product.productId) {
              throw new Error('Invalid product data.');
          }
          // Return productId
          return product.productId;
      });

      // Log productIds for debugging
      console.log('Product IDs:', productIds);

      // Create a new order document
      const newOrder = new OrderModel({
          email,
          products: productIds.map(productId => ({ productId })), // Assign array of productIds
      });

      // Save the new order document
      await newOrder.save();

      // Send success response
      res.status(201).send({
          message: 'Order received successfully',
          Order: newOrder,
      });
  } catch (error) {
      // Log and send error response
      console.error('Error:', error);
      res.status(500).send({
          error: error.message,
          message: 'Error in creating orders',
      });
  }
};


const getOrders = async (req, res) => {
  try {
    const userEmail = req.body.email;
    if (!userEmail) {
      return res.status(400).send({ message: "Email is required" });
    }

    const orders = await OrderModel.find({ email: userEmail });
    if (orders.length > 0) {
      res.status(200).send({ message: "Orders fetched successfully", orders: orders });
    } else {
      res.status(404).send({ message: "No orders found for the provided email" });
    }
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send({
      error: error.message,
      message: 'Error in getting orders',
    });
  }
};


export default {
  createOrders,
  getOrders
}
import OrderModel from "../Models/Orders.js";

const createOrders = async (req, res) => {
  try {
    const { email, products } = req.body;

    // Check if email is missing or products is not an array
    if (!email || !Array.isArray(products) || products.length === 0) {
      throw new Error('Invalid Data: Email is required and products must be a non-empty array');
    }

    // Extract productIds from products array
    const productIds = products.map(product => {
      // Ensure each product has a productId property
      if (typeof product !== 'object' || !product.productId) {
        throw new Error('Invalid product data: Each product must have a productId');
      }
      // Return productId
      return product.productId;
    });

    // Create a new order document
    const newOrder = new OrderModel({
      email,
      products: productIds.map(productId => ({ productId })),
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
    const email = req.query.email; // Extract email from query params
    if (!email) {
      return res.status(400).send({ message: "Email is required" });
    }

    // Query the database to find orders associated with the provided email
    const orders = await OrderModel.find({ email: email });
    // Check if orders were found
    if (orders.length > 0) {
      // Map over each order and extract its products
      const products = orders.map(order => order.products);
      res.status(200).send({ message: "Orders fetched successfully", orders: products });
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
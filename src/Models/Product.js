import mongoose from "./index.js";

const ProductSchema = new mongoose.Schema(
  {
    name: { type: String, required: [true, "Product Name is required"] },
    description: {type: String, required: [true, "Product Description is required"]},
    price: { type: Number , required: [true, "Product Price is required"] },
    imageData: {
      filename: String,
      path: String,
    },
    category: {type: String, required: [true, "Product Category is required"] },
    style: {type: String, required: [true, "Product Style is required"] },
    color: {type: String, required: [true, "Product color is required"] },
    size: {type: String, required: [true, "Product Sizes is required"] },
    quantity: {type: Number, required: [true, "Product quantity is required"],},
    shipping: { type: Boolean },
  },
  {
    collection: "Products",
    versionKey: false,
    timestamps: true,
  },
);

const ProductModel = mongoose.model("Products", ProductSchema);

export default ProductModel;

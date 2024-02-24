import mongoose from "./index.js";

const OrderSchema = new mongoose.Schema(
  {
    email:{type:String, required:[true,"email is required"]},
    products: [{
        productId: {type: String}
    }]
  },
  {
    collection: "Orders",
    versionKey: false,
    timestamps: true,
  },
);

  
  const OrderModel = mongoose.model("Orders", OrderSchema);
  
  export default OrderModel;
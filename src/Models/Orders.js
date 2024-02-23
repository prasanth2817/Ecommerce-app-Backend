import mongoose from "./index.js";

const validateEmail = (email)=>{
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailPattern.test(email); 
}

const OrderSchema = new mongoose.Schema(
  {
    email:{type:String, required:[true,"Email is required"],validate:validateEmail},
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
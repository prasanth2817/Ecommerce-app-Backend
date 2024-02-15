import mongoose from "./index.js";

const imageSchema = new mongoose.Schema({
    filename: { type: String, required: [true, "fileName is required"] },
    path: {type: String, required: [true, "filePath is required"]},
  },{
    colletion:"Images",
    versionKey: false
  });

  const ImageModel = mongoose.model("images",imageSchema)

  export default ImageModel
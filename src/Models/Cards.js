import mongoose from "./index.js";

const CardsSchema = new mongoose.Schema(
  {
    title: { type: String, required: [true, "title is required"] },
    imageUrl: { type: String, required: [true, "imageUrl is required"] },
  },
  {
    collection: "Cards",
    versionKey: false,
  },
);

const CardModel = mongoose.model("Cards", CardsSchema);

export default CardModel;
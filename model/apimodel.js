import mongoose from "mongoose";

const ApiSchema = new mongoose.Schema({
  apiKey: {
    type: String,
    required: true,
    unique: true,
  },
  apiSecret: {
    type: String,
    required: true,
  },
});

const Api = mongoose.model("Api", ApiSchema);

export default Api;
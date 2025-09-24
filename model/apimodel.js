import mongoose from "mongoose";

const ApiSchema = new mongoose.Schema({
  user: {                      
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  keyHash: {                    
    type: String,
    required: true,
    unique: true,
  },
  secretHash: {                 
    type: String,
    required: true,
  },
  name: { type: String },       
  active: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now },
  expiresAt: { type: Date }     
});

export default mongoose.model("ApiKey", ApiSchema);

import ApiKey from "../models/apiKeyModel.js";
import crypto from "crypto";


const generateRawKey = () => crypto.randomBytes(32).toString("hex");

const hashKey = (key) => crypto.createHash("sha256").update(key).digest("hex");

export const createApiKey = async (req, res) => {
  try {
    const rawKey = generateRawKey();
    const rawSecret = generateRawKey();
    const keyHash = hashKey(rawKey);
    const secretHash = hashKey(rawSecret);

    const newApiKey = new ApiKey({
      user: req.user._id,      
      keyHash,
      secretHash
    });

    await newApiKey.save();

    
    res.status(201).json({
      apiKey: rawKey,
      apiSecret: rawSecret
    });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

export const revokeApiKey = async (req, res) => {
  try {
    const { id } = req.params; 
    const deleted = await ApiKey.findOneAndDelete({
      _id: id,
      user: req.user._id
    });

    if (!deleted) {
      return res.status(404).json({ message: "API key not found" });
    }
    res.json({ message: "API key revoked successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

import mongoose, { mongo } from "mongoose";

const providerSchema = mongoose.Schema({
  providerName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  location: {
    type: String,
    required: true,
  },
  services: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Service",
    },
  ],
});

export const Provider = mongoose.model("Provider", providerSchema);

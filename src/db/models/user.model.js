import mongoose from "mongoose";
import { GenderEnum } from "../../common/utils/enums/user.enum.js";

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    trim: true,
    required: true,
    minLength: 3,
    maxLength: 10,
  },
  lastName: {
    type: String,
    trim: true,
    required: true,
    minLength: 3,
    maxLength: 10,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  DOB: {
    type: Date,
    required: true,
  },
  gender: {
    type: Number,
    enum: Object.values(GenderEnum),
  },
});

export const User = mongoose.model("User", userSchema);

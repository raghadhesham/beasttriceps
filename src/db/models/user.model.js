import mongoose from "mongoose";
import { GenderEnum } from "../../common/utils/enums/user.enum.js";

export const userSchema = new mongoose.Schema({
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
  },
  password: {
    type: string,
    required: true,
  },
  confirmPassword: {
    type: string,
    required: true,
    validate: {
      validator: function (value) {
        return value === this.password;
      },
      message: "Passwords don't match :(",
    },
  },
  DOB: {
    type: Date,
    required: true,
    },
  gender: {
      type: String,
      enum: [GenderEnum.female, GenderEnum.male],
    },
});

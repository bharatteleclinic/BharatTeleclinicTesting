import mongoose, { Schema } from "mongoose";
import {
  emailValidator,
  mobileValidator,
  passwordValidator,
} from "../utils/validator";
const patientSchema = new Schema(
  {
    firstName: {
      type: String,
      maxlength: 20,
      minlength: 3,
      required: true,
    },
    lastName: {
      maxlength: 20,
      minlength: 3,
      type: String,
      required: true,
    },
    gender: {
      type: String,
      enum: ["male", "female", "other"],
      required: true,
    },
    contact: {
      email: {
        type: String,
        validate: {
          validator: emailValidator,
          message: "Invalid email",
        },
      },
      mobile: {
        type: String,
        required: true,
        minlength: 10,
        maxlength: 11,
        validate: {
          validator: mobileValidator,
          message: "Mobile number should be at least 10",
        },
      },
    },
    password: {
      type: String,
      required: true,
      minlength: 8,
      validate: {
        validator: passwordValidator,
        message: "There should be minimum length is 8 and max length is 10",
      },
    },
    abhaNo: {
      type: String,
      required: true,
    },
    aadharNo: {
      type: Number,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    disease: {
      type: String,
      required: true,
    },
    medicine: {
      type: String,
      required: true,
    },
    doctor: {
      type: Schema.Types.ObjectId,
      ref: "Doctor",
    },
  },
  {
    timestamps: true,
  }
);

const Patient = mongoose.model("Patient", patientSchema);
export default Patient;

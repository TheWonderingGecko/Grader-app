import mongoose from "mongoose";
import Grader from "./Grader";

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    minLength: 6
  },
  grades: [{ type: mongoose.Types.ObjectId, ref: "Grader", required: true }],
});
export default mongoose.model("User", userSchema);
// users
import mongoose from "mongoose";

const Schema = mongoose.Schema;

const graderSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Types.ObjectId,
    ref:"User",
    required: true,
  }
});

export default mongoose.model("Grader", graderSchema);
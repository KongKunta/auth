import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  password: { type: String, required: true },
});

let User;

if (mongoose.models.User) {
  User = mongoose.model("User");
} else {
  User = mongoose.model("User", userSchema);
}

export default User;

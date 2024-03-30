import { Schema, model, models } from "mongoose";

const schema = new Schema({
  name: { type: String, required: true },
  password: { type: String, required: true },
});

const User = models.User || model("User", schema);

export default User;

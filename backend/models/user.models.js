import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const userSchema = new Schema({
  date: {
    type: date,
    default: Date.now
  },
  username: String,
  email: String,
  password: String,
})

const User = mongoose.model("User", userSchema);

export default User;
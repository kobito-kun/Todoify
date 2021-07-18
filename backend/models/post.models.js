import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const postSchema = new Schema({
  date: {
    type: Date,
    default: Date.now
  },
  title: String,
  description: String,
  section: String,
  user: String,
})

const Post = mongoose.model("Post", postSchema);

export default Post;
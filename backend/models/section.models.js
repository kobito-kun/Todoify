import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const sectionSchema = new Schema({
  date: {
    type: Date,
    default: Date.now
  },
  title: String,
  description: String,
  user: String,
})

const Section = mongoose.model("Section", sectionSchema);

export default Section;
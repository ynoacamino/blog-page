import mongoose from 'mongoose';

const Schema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  image: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  type: {
    type: String,
    require: true,
  },
  author: {
    type: String,
    require: true,
  },
  content: {
    type: String,
    require: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  path: {
    type: String,
    require: true,
  },
  pdf: [{
    type: String,
    require: true,
  }],
});

export default mongoose.models.Article || mongoose.model('Article', Schema);

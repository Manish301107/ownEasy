const mongoose = require('mongoose')
const url = 'mongodb://127.0.0.1:27017/staffList'
const connection = mongoose.connect(url);

const { Schema } = mongoose;

const teamSchema = new Schema({
  name: String,
  age: String,
  post: String
});
module.export = const Team = mongoose.model('staffName', teamSchema);  
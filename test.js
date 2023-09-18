const mongoose = require('mongoose')
const express = require('express')
const app = express()
const port = process.env.PORT || 5050
const database = "mongodb+srv://manish:301107@cluster0.eh6qqeu.mongodb.net/userbase?retryWrites=true&w=majority"

console.log(`All Changes are reserved || Develop By- MANISH SONI`); 
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*'); // Allow requests from any origin
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE'); // Allow specific HTTP methods
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type'); // Allow specific headers
  next();
});
mongoose.connect(database, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(()=>{
  console.log("running🏃");
}).catch((err)=>{
  console.log(`error is happens 🤔🤔`, err);
})

const userSchema = new mongoose.Schema({
  name: String, 
  age: Number, 
  post: String
});

const User = mongoose.model('userdata', userSchema);

app.get("/", async (req, res) => {
  try {
    const users = await User.find({});
    const result = res.json(users);
    console.log(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to retrieve users' });
  }
});
app.listen(port); 

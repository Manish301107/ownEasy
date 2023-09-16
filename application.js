const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

const url = 'mongodb+srv://ms2803429:3011@cluster0.0aliklf.mongodb.net/staffList';

mongoose
  .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

const { Schema } = mongoose;

const teamSchema = new Schema({
  name: String,
  age: String,
  post: String,
  imgUrl: String,
  company: String,
  salary: String,
});

const Team = mongoose.model('newstaff', teamSchema);

app.use(cors());
app.use(express.json());

app.get('/data', async (req, res) => {
  try {
    const data = await Team.find();
    res.json(data);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Failed to retrieve data' });
  }
});

app.post('/form-data', async (req, res) => {
  const { name, age, post, company, salary, imgUrl } = req.body;

  const formData = new Team({
    name,
    age,
    post,
    company,
    salary,
    imgUrl,
  });

  try {
    await formData.save();
    res.status(200).json({ message: 'Form data saved successfully' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Failed to save form data' });
  }
});

app.delete('/form-data', async (req, res) => {
  const { name, post, company } = req.body;

  try {
    await Team.deleteOne({ name, post, company });
    res.status(200).json({ message: 'Form data deleted successfully' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Failed to delete form data' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

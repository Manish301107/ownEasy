const mongoose = require('mongoose')
const url = 'mongodb+srv://ms2803429:3011@cluster0.0aliklf.mongodb.net/staffList'
const connection = mongoose.connect(url);
const PORT = process.env.PORT || 3000
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

const express = require('express')
const cors = require('cors')
const app = express();
app.use(cors());
app.use(express.json())
 
Team.find()
  .then((data) => {
    return data
  }).then((data) => {
    app.get('', async (req, res) => {
      await res.send(data);
      console.log(data)
    });

    app.post('/form-data', (req, res) => {
      const { name, age, post, company, salary, imgUrl } = req.body;
 
      const formData = new Team({
        name,
        age, 
        post,
        company,
        salary,
        imgUrl
      });

      formData.save()
        .then(() => {
          res.status(200).json({ message: 'Form data saved successfully' });
        })
        .catch((error) => {
          res.status(500).json({ error: 'Failed to save form data' });
        });
    });


app.delete('/form-data', (req, res) => {
  const { name, post, company } = req.body;

  Team.deleteOne({ name, post, company }) // Specify the criteria for deletion
    .then(() => {
      res.status(200).json({ message: 'Form data deleted successfully' });
    })
    .catch((error) => {
      res.status(500).json({ error: 'Failed to delete form data' });
    });
});

    app.listen(PORT) 
  })
  .catch((error) => {
    console.error('Error:', error);
  });
  let a = "reload"
  setInterval(()=>{ a = "refresh"}, 2000) 
 
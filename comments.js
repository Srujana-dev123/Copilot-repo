//create web server
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Comment = require('./models/comment');

const app = express();

//connect to database
mongoose.connect('mongodb://localhost/commentbox');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/comments', (req, res) => {
  Comment.find((err, comments) => {
    if (err) return res.status(500).json({ message: err.message });
    res.json(comments);
  });
});

app.post('/api/comments', (req, res) => {
  Comment.create(req.body, (err, comment) => {
    if (err) return res.status(500).json({ message: err.message });
    res.json(comment);
  });
});

app.listen(3001, () => {
  console.log('Server listening on', 3001);
});
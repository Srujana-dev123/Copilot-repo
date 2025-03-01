//create web server
var express = require('express');
var app = express();

//create a comments object
var comments = {
  "1": "This is the first comment",
  "2": "This is the second comment",
  "3": "This is the third comment"
};

//create a route to get all comments
app.get('/comments', function(req, res) {
  res.send(comments);
});

//create a route to get a comment by id
app.get('/comments/:id', function(req, res) {
  var comment = comments[req.params.id];
  if (comment) {
    res.send(comment);
  } else {
    res.status(404).send("Comment not found");
  }
});

//start the server
var server = app.listen(3000, function() {
  console.log('Server listening on port 3000');
});
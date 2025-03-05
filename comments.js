// Create web server
// Use express and body-parser to create a web server
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const comments = require('./comments.json');
const fs = require('fs');

app.use(bodyParser.json());

// GET /comments
// Respond with the JSON of all comments
app.get('/comments', (req, res) => {
    res.json(comments);
});

// POST /comments
// Create a new comment
app.post('/comments', (req, res) => {
    // Get the comment from the request
    const newComment = req.body;
    // Add the comment to the comments array
    comments.push(newComment);
    // Write the comments to the file
    fs.writeFile('./comments.json', JSON.stringify(comments), (err) => {
        if (err) {
            res.status(500).send('Error writing to file');
        } else {
            // Respond with the new comment
            res.json(newComment);
        }
    });
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
// End of comments.js
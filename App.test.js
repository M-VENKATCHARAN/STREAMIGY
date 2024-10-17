const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const app = express();
const port = 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/streamify', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

// Check connection
db.once('open', () => {
    console.log('Connected to MongoDB');
});

// Check for DB errors
db.on('error', (err) => {
    console.log(err);
});

// Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// User Model
const User = require('./models/User');

// Route for user authentication
app.post('/authenticate', (req, res) => {
    const { username, password } = req.body;

    // Find user by username
    User.findOne({ username }, (err, user) => {
        if (err) throw err;

        if (!user) {
            res.json({ success: false, message: 'User not found' });
        } else {
            // Check password
            user.comparePassword(password, (err, isMatch) => {
                if (err) throw err;

                if (isMatch) {
                    // Redirect to another page on successful authentication
                    res.redirect('/success-page');
                } else {
                    res.json({ success: false, message: 'Incorrect password' });
                }
            });
        }
    });
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse incoming JSON data
app.use(bodyParser.json());

// Serve static files from the current directory
app.use(express.static('public'));

// Handle form submission
app.post('/signup', (req, res) => {
  const { email, password, confirm_password } = req.body;

  // Simple validation
  if (password !== confirm_password) {
    res.status(400).send('Passwords do not match');
  } else {
    // Process the registration (for simplicity, just log the data)
    console.log('Registration Data:', { email, password });
    res.send('Registration successful!');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening at https://mahimajy.github.io/Registrationform-/}`);
});

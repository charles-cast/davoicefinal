const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect('mongodb://127.0.0.1:27017/davoiceDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Define Schema and Model
const userSchema = new mongoose.Schema({
  identificationNumber: { type: Number, required: true },
  course: { type: String, required: true },
});

const User = mongoose.model('User', userSchema);

// API Endpoint for Login
app.post('/api/login', async (req, res) => {
  const { identificationNumber, course } = req.body;

  try {
    const newUser = new User({ identificationNumber, course });
    await newUser.save();
    res.status(201).json({ message: 'User data saved successfully' });
  } catch (error) {
    console.error('Error saving user data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
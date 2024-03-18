const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import the cors middleware

const app = express();
app.use(bodyParser.json());
app.use(cors()); // Use the cors middleware

mongoose.connect('mongodb+srv://yashs3324_new:b4VoqOjYOHZjHZ3R@cluster0.tnfs0tz.mongodb.net/Tender_project', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.once('open', () => console.log('Connected to MongoDB'));
db.on('error', (err) => console.error(err));

// Define Tender Schema using Mongoose
const tenderSchema = new mongoose.Schema({
  nameOfWork: { type: String, required: true },
  location: { type: String, required: true },
  approxCost: { type: String, required: true },
  bidSecurity: { type: String, required: true },
  address: { type: String, required: true },
  uploadDateTime: { type: Date, required: true },
  tenderNumber: { type: String, required: true },
});

// Create Tender Model
const Tender = mongoose.model('Tender', tenderSchema);

// Route to handle form submission
app.post('/submit-form', async (req, res) => {
  try {
    const newTender = new Tender(req.body);
    await newTender.save();
    res.status(201).json({ message: 'Tender published successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Add your other routes (e.g., user registration, login) here

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.use((req, res) => {
  res.status(404).json({ message: 'Not found...' });
});

const server = app.listen(8000, () => {
  console.log('Server is running!');
});
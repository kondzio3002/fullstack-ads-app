const express = require('express');
const cors = require('cors');
const socket = require('socket.io');
const mongoose = require('mongoose');

const app = express();

const NODE_ENV = process.env.NODE_ENV;
let dbURI = '';

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.use('/api/auth', require('./routes/auth.routes'));

if (NODE_ENV === 'production') dbURI = `mongodb+srv://kondzio3002:${process.env.DB_PASS}@annoucement-app.gjodigx.mongodb.net/AnnoucementAppDB?retryWrites=true&w=majority`;
else if (NODE_ENV === 'test') dbURI = 'mongodb://localhost:27017/AnnoucementAppDBtest'
else dbURI = 'mongodb://localhost:27017/AnnoucementAppDB';

app.use((req, res) => {
  res.status(404).json({ message: 'Not found...' });
});

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.once('open', () => {
  console.log('Connected to the datebase');
});
db.on('error', err => console.log('Error ' + err));

const server = app.listen(process.env.PORT || 8000, () => {
  console.log('Server is running!');
});

const io = socket(server);

io.on('connection', (socket) => {});
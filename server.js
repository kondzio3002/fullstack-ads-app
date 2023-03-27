const express = require('express');
const cors = require('cors');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const mongoose = require('mongoose');
const path = require('path');

const app = express();
app.listen(process.env.PORT || 8000, () => {
  console.log('Server is running!');
});

const NODE_ENV = process.env.NODE_ENV;
let dbURI = '';

if (NODE_ENV === 'production') dbURI = `mongodb+srv://kondzio3002:${process.env.DB_PASS}@annoucement-app.gjodigx.mongodb.net/AnnoucementAppDB?retryWrites=true&w=majority`;
else if (NODE_ENV === 'test') dbURI = 'mongodb://localhost:27017/AnnoucementAppDBtest'
else dbURI = 'mongodb://localhost:27017/AnnoucementAppDB';

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.once('open', () => {
  console.log('Connected to the datebase');
});
db.on('error', err => console.log('Error ' + err));

app.use(express.static(path.join(__dirname, '/client/build')));
app.use(express.static(path.join(__dirname, '/public')));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
if (process.env.NODE_ENV !== 'production') {
  app.use(cors({
    origin: ['http://localhost:3000'],
    credentials: true
  }));
}
app.use(session({
  secret: `${process.env.SESSION_SECRET}`,
  store: MongoStore.create(db),
  resave: false,
  saveUninitialized: false,
  cookie: { secure: process.env.NODE_ENV === 'production' }
}));

app.use('/api', require('./routes/ads.routes'));
app.use('/api/auth', require('./routes/auth.routes'));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/client/build/index.html'));
});

app.use((req, res) => {
  res.status(404).json({ message: 'Not found...' });
});
const express = require('express');

const app = express();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, DELETE, PATCH, OPTIONS'
  );
  next();
});

app.use('/api/stuff', (req, res, next) => {
  const stuff = [
    {
      _id: 'aflkzhfa',
      title: 'My first thing',
      description: 'All of the info of my first thing',
      imageUrl: '',
      price: 4900,
      userId: 'kjahzfakl',
    },
    {
      _id: 'aflhfa',
      title: 'My second thing',
      description: 'All of the info of my Second thing',
      imageUrl: '',
      price: 1200,
      userId: 'kjahakl',
    },
  ];

  res.status(200).json(stuff);
});

module.exports = app;

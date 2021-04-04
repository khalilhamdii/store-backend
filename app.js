const express = require('express');
const bodyParser = require('body-parser');

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

app.use(bodyParser.json());

app.post('/api/stuff', (req, res, next) => {
  console.log(req.body);
  res.status(201).json({
    message: 'Thing created successfuly!',
  });
});

app.use('/api/stuff', (req, res, next) => {
  const stuff = [
    {
      _id: 'aflkzhfa',
      title: 'My first thing',
      description: 'All of the info of my first thing',
      imageUrl: 'https://picsum.photos/600',
      price: 4900,
      userId: 'kjahzfakl',
    },
    {
      _id: 'aflhfa',
      title: 'My second thing',
      description: 'All of the info of my Second thing',
      imageUrl: 'https://picsum.photos/600',
      price: 1200,
      userId: 'kjahakl',
    },
  ];

  res.status(200).json(stuff);
});

module.exports = app;

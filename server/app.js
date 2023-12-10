const express = require('express');
const axios = require('axios');
const app = express();
const port = 3001;
const request = require('request');
const cors = require('cors'); // Import the cors middleware
app.use(express.json());
app.use(cors()); // Enable CORS for all routes

app.post('/', async (req, res) => {
  const { from, to } = req.body;

  const options = {
    method: 'POST',
    url: 'https://apis.tollguru.com/toll/v2/origin-destination-waypoints',
    headers: {
      'content-type': 'application/json',
      'x-api-key': '2Fmj3FQMNfT47jDJLFpgT468PqmqtTbp',
    },
    body: {
      from,
      to,
      json: true,
    },
    json: true,
  };

  request(options, function (error, response, body) {
    if (error) {
      res.status(500).json({ error: 'Internal Server Error' });
      console.error(error);
      return;
    }

    res.json(body);
    console.log(body);
  });
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});


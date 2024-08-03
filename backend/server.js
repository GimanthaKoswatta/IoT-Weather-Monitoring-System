const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5001;  // Change this line

app.use(cors());
app.use(bodyParser.json());

let sensorData = { temperature: 0, humidity: 0 };

app.post('/data', (req, res) => {
  sensorData = req.body;
  console.log('Received data:', sensorData);
  res.sendStatus(200);
});

app.get('/data', (req, res) => {
  res.json(sensorData);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
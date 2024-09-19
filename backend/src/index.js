const express = require('express');
const cors = require('cors');
const config = require('../config/config');
const httpStatus = require('http-status');
const routesV1 = require('./routes/v1');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/v1', routesV1);

app.use((err, _req, res) => {
  console.error(err.stack);
  res
    .status(httpStatus.INTERNAL_SERVER_ERROR)
    .send({ message: 'Something went wrong!' });
});

app.listen(config.app.port, () => {
  console.log(
    `Server is running on ${config.app.protocol}://${config.app.url}:${config.app.port}`
  );
});

const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
const port = process.env.PORT || 5000;

const express = require('express');
const app = express();

app.use(express.json());

app.use(cors(
  {
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  }
));

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
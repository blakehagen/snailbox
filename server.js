'use strict';

const babel       = require('babel-core').transform('code');
const express     = require('./server/config/express.js');

// RUN EXPRESS //
const app = express();
console.log('hello from server.js !');

// PORT //
const port = process.env.PORT || 5500;
app.listen(port, () => {
  console.log('Check me out on port', port);
});
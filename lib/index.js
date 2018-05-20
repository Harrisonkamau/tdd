const express = require('express');

const app = express();

app.get('/hello', (req, res) => {
  res.end('Hello world!');
});

let server;

exports.start = (port, callback) => {
  server = app.listen(port, callback);
};

exports.stop = callback => server.close(callback);

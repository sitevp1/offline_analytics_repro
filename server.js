const express = require('express');
const app = express();


process.stdout.write("Starting web server\n");

app.use(express.static(__dirname + '/'));

const server = app.listen(8081, () => {

  const host = server.address().address;
  const port = server.address().port;

  console.log('App listening at http://%s:%s', host, port);
});
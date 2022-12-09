const cors = require('cors');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');

app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

app.use('/', express.static('client'));

app.post('/subscriptions', (request, response) => {
  console.log(request.body);
  response.send(fs.readFileSync('package.json'));
  fs.writeFileSync('subscriber.json', JSON.stringify(request.body));
})

app.listen(8080, () => {
  console.log('Running...');
})
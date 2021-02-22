const path = require('path');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.resolve(__dirname, '../build')));
// All requests return the React app, so it can handle routing.
  app.get('*', function(request, response) {
    response.sendFile(path.resolve(__dirname, '../build', 'index.html'));
  });

app.listen(port, () => {
   console.log('Server is up!');
});
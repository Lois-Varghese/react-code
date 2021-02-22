const path = require('path');
const express = require('express');
const app = express();
const buildPath = path.join(__dirname, '..', 'public');
const port = process.env.PORT || 3000;
app.use(express.static(buildPath));
app.get('*', (req, res) => {
   res.sendFile(path.join(buildPath, 'index.html'));
});
app.listen(port, () => {
   console.log('Server is up!');
});
const express = require('express');
const path = require('path');
const port = 3000;
const app = express();
const publicDir = path.join(__dirname, 'public');

app.use(express.static(path.join(publicDir)));

app.listen(port, () => console.log('Server started on port 3000'));

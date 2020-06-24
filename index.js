const express = require('express');
const path = require('path');
const reload = require('reload');
const http = require('http');

const port = 3000;
const app = express();
const publicDir = path.join(__dirname, 'public');

/*

FOR THIS TO WORK: (You only have to do this once)

run terminal command:
> npm init (when in doubt, just hit enter)
> npm i -D nodemon reload
> npm i express

paste: "start": "nodemon --watch public -e js,html,css",
into "scripts" field in package.json

then, in your index.html file (right above the </body> closing tag) paste:
<script src="/reload/reload.js"></script>

- make sure you put all of your other html/js/css files/folders into the public/ folder

TO RUN THE SERVER:
> npm run start
*/


app.use(express.static(path.join(publicDir)));
app.set('port', process.env.PORT || port);

app.get('/', function(req, res) {
  res.sendFile(path.join(publicDir, "index.html"));
})

var server = http.createServer(app);

reload(app).then(function(reloadReturned) {
  server.listen(app.get('port'), () => {
    console.log("Listening on http://localhost:" + app.get('port'));
  })
}).catch(function(err) {
  console.error('Reload could not start, could not start server/sample app', err)
})
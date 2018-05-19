import WebServer from './web.server'
let webServer = new WebServer();
webServer.start()
  .then(() => {
    console.log('Server running on http://localhost:3000/')
  })
  .catch(err => {
    console.error(err)
    console.error('Failed to start web server')
  });
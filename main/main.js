const { app, BrowserWindow } = require('electron')
const path = require('path');

require('./initDbFile');

function createWindow () {
  // Create the browser window.
  win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      webSecurity: false
    }
  })

  // and load the index.html of the app.
  const indexFilename = path.join('file://', __dirname, '..', '/dist/index.html');
  win.loadURL(indexFilename)
}

app.on('ready', createWindow);

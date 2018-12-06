const { app, BrowserWindow } = require('electron')
const path = require('path');

function createWindow () {
  // Create the browser window.
  win = new BrowserWindow({ width: 800, height: 600 })

  // and load the index.html of the app.
    win.loadURL(path.join('file://', __dirname, '/dist/index.html'))
}

app.on('ready', createWindow)
const { app, BrowserWindow } = require('electron')
const path = require('path');

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
  let indexFilename;

  if (process.env.NODE_ENV === 'development') {
    indexFilename = 'http://localhost:8060';
  } else {
    indexFilename = path.join('file://', __dirname, '../build/index.html');
  }

  win.loadURL(indexFilename);
  win.webContents.openDevTools();
}

app.on('ready', createWindow);

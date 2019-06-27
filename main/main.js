const { app, BrowserWindow } = require('electron')
const path = require('path');
  console.log(module.paths);

// const db = require('../src/persistence/db');

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
  console.log(module.paths);
  console.log(indexFilename);
  indexFilename = path.join('file://', __dirname, '../build/index.html');
  win.loadURL(indexFilename);
  win.webContents.openDevTools();
}

app.on('ready', createWindow);

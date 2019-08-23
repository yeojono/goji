const { app, BrowserWindow, ipcMain } = require('electron')
const { autoUpdater } = require('electron-updater');
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

  if (process.env.NODE_ENV === 'development') {
    log = require('electron-log');
    autoUpdater.updateConfigPath = path.join(__dirname, '../dev-app-update.yml');
    autoUpdater.allowPrerelease = true;
    log.info('Current version: ', autoUpdater.currentVersion);
    autoUpdater.currentVersion.major = 0;
    autoUpdater.currentVersion.minor = 9;
    log.info('Current version: ', autoUpdater.currentVersion);
  }

  function sendMessageToWindow(text) {
    if (process.env.NODE_ENV === 'development') {
      log.info('sendMessageToWindow:', text);
    }
    win.webContents.send('message', text);
  }

  autoUpdater.on('checking-for-update', (event) => {
    sendMessageToWindow('Checking for updates');
    log.info('=====================')
    log.info(event)
  });

  autoUpdater.on('update-available', (event) => {
    sendMessageToWindow('Update available')
    sendMessageToWindow(event)
  });


  autoUpdater.on('update-not-available', (event) => {
    sendMessageToWindow('Update available')
    sendMessageToWindow(event)
  });

  ipcMain.on('check-for-updates', (event, args) => {
    autoUpdater.checkForUpdates();
  })
}

app.on('ready', createWindow);
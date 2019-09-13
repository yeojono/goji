const { app, BrowserWindow, ipcMain, Menu } = require('electron');
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
  });

  // and load the index.html of the app.
  let indexFilename;

  if (process.env.NODE_ENV === 'development') {
    indexFilename = 'http://localhost:8060';
  } else {
    indexFilename = path.join('file://', __dirname, '../build/index.html');
  }

  win.loadURL(indexFilename);
  win.webContents.openDevTools();

  function sendMessageToWindow(text) {
    win.webContents.send('message', text);
  }

  autoUpdater.on('checking-for-update', (event) => {
    sendMessageToWindow('Checking for updates');
  });

  autoUpdater.on('update-available', (event) => {
    sendMessageToWindow('Update available');
    sendMessageToWindow(event);
  });


  autoUpdater.on('update-not-available', (event) => {
    sendMessageToWindow('Update available');
    sendMessageToWindow(event);
  });

  ipcMain.on('check-for-updates', (event, args) => {
    autoUpdater.checkForUpdates();
  });

  // Create the Application's main menu
  const menuTemplate = [{
    label: "Application",
    submenu: [
      { label: "About Application", selector: "orderFrontStandardAboutPanel:" },
      { type: "separator" },
      { label: "Quit", accelerator: "Command+Q", click: function() { app.quit(); }}
    ]}, {
    label: "Edit",
    submenu: [
      { label: "Undo", accelerator: "CmdOrCtrl+Z", selector: "undo:" },
      { label: "Redo", accelerator: "Shift+CmdOrCtrl+Z", selector: "redo:" },
      { type: "separator" },
      { label: "Cut", accelerator: "CmdOrCtrl+X", selector: "cut:" },
      { label: "Copy", accelerator: "CmdOrCtrl+C", selector: "copy:" },
      { label: "Paste", accelerator: "CmdOrCtrl+V", selector: "paste:" },
      { label: "Select All", accelerator: "CmdOrCtrl+A", selector: "selectAll:" }
    ]}
  ];
  Menu.setApplicationMenu(Menu.buildFromTemplate(menuTemplate));
}

app.on('ready', createWindow);
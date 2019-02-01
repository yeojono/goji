const app = require('electron').app;
const fs = require('fs');

function initDbFile() {
  const dataFilename = '' + app.getPath('appData') + '/goji-app-13';

  if (!fs.existsSync(dataFilename)) {
    fs.writeFileSync(dataFilename, '');
  }
}

initDbFile();

import Datastore from 'nedb';
import { app } from 'electron';

export const createDb = () => {
  // const dataFilename = '' + app.getPath('appData') + '/goji-app-13';
  const dataFilename = '/Users/jyeo/Library/Application Support/goji-app-13';

  const datastore = new Datastore({
    filename: dataFilename,
    autoLoad: true,
  });

  return datastore;
}

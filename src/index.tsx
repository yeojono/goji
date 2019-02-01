import React from 'react';
import ReactDOM from 'react-dom';
import AppRoot from './view/AppRoot';
import { NotesStore } from './app-state';
import LocalStoragePersistor from './persistence/localStorage/NotesPersistor';
import { createDb } from './persistence/nedb/createDb';

const db = createDb();

const mountApp = async function() {
  const notesStore = await new NotesStore(new LocalStoragePersistor()).init();
  ReactDOM.render(
    <AppRoot
      stores={[
        notesStore,
      ]}
    />,
    document.getElementById('app')
  );
}();

module.hot.accept('./view/AppRoot', () => {
  mountApp();
});
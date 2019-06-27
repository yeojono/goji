import React from 'react';
import ReactDOM from 'react-dom';
import AppRoot from './view/AppRoot';
import { NotesStore } from './app-state';
import LocalStoragePersistor from './persistence/localStorage/NotesPersistor';
// import db from './persistence/db';
// console.log(db);
console.log('-------------------------------------hello------------------------------------');

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

import React from 'react';
import ReactDOM from 'react-dom';
import AppRoot from './view/AppRoot';
import { NotesStore } from './app-state';
import NotesPersistor from './persistence/localStorage/NotesPersistor';

const title = 'My Minimal React Webpack Babel Setup';

const mountApp = async function() {
  const notesStore = await new NotesStore(new NotesPersistor()).init();
  ReactDOM.render(
    <AppRoot
      stores={[
        notesStore,
      ]}
    />,
    document.getElementById('app')
  );
}();

module.hot.accept();
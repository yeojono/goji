import React from 'react';
import { Subscribe } from 'unstated';
import { NotesStore } from '../../../../app-state';
import { NotesRouteBase } from './NotesRouteBase';

const selectNotes = (notes: NotesStore) => notes.state.notes;

export class NotesRouteContainer extends React.Component<{}> {
  render() {
    return (
      <Subscribe to={[NotesStore]}>
        {(notes: NotesStore) => (
          <NotesRouteBase notes={selectNotes(notes)} />
        )}
      </Subscribe>
    );
  }
}

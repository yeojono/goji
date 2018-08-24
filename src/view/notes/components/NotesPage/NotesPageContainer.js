import React from 'react';
import { Subscribe } from 'unstated';
import { NotesStore } from '../../../../app-state';
import { NotesPage } from './NotesPage';

interface Props {

}

const selectNotes = (notes: NotesStore) => notes.state.notes;

export class NotesPageContainer extends React.Component<Props> {
  render() {
    return (
      <Subscribe to={[NotesStore]}>
        {(notes) => (
          <NotesPage notes={selectNotes(notes)} />
        )}
      </Subscribe>
    );
  }
}

export default NotesPageContainer;

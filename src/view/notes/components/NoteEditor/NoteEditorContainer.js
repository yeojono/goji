import { NoteID, Note } from '../../../../model/notes';

import React from 'react';
import { Subscribe } from 'unstated';
import NotesStore from '../../../../app-state/notes/NotesStore';
import { NoteEditor } from './NoteEditor';

interface Props {
  noteId: NoteID;
}

const selectNote = (notes: NotesStore, noteId: NoteID) => {
  return notes.getNote(noteId) || {};
}

const updateNote = (notes: NotesStore, noteId: NoteID) => {
  return (note: Note) => notes.updateNote(noteId, note);
}

export class NoteEditorContainer extends React.Component<Props> {
  render() {
    return (
      <Subscribe to={[NotesStore]}>
        {(notes) => (
          <NoteEditor
            key={this.props.noteId}
            note={selectNote(notes, this.props.noteId)}
            saveNote={updateNote(notes, this.props.noteId)}
          />
        )}
      </Subscribe>
    );
  }
}

export default NoteEditorContainer;

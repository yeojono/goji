import React from 'react';
import { Subscribe } from 'unstated';

import NotesStore from '../../../app-state/notes/NotesStore';
import { type NoteID } from '../../../app-state/notes/types';
import NoteEditor from '../NoteEditor';
import * as Styled from './NoteEditor.styled';

type Props = {
  match: {
    params: {
      noteId: NoteID;
    },
  };
}

export class NoteEditorPage extends React.Component<Props> {

  render() {
    console.log(this.props);
    const { match: { params: { noteId } } } = this.props;
    return (
      <Styled.Page>
        <Subscribe to={[NotesStore]}>
          {(notes) => {
            const note = notes.getNote(noteId) || {};  // TODO FIX
            return <NoteEditor note={note} />;
          }}
        </Subscribe>
      </Styled.Page>
    );
  }
}

export default NoteEditorPage;

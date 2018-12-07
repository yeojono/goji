import { NoteID } from '../../../../model/notes';

import React from 'react';

import * as Styled from './NoteEditor.styled';
import NoteEditorContainer from '../NoteEditor';

type Props = {
  match: {
    params: {
      noteId: NoteID;
    },
  };
}

export class NoteEditorRoute extends React.Component<Props> {
  render() {
    const { match: { params: { noteId } } } = this.props;
    return (
      <Styled.Route>
        <NoteEditorContainer noteId={noteId} />
      </Styled.Route>
    );
  }
}

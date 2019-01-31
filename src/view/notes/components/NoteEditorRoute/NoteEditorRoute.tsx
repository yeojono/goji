import React from 'react';
import { RouteComponentProps } from 'react-router';

import { NoteID } from '../../../../model/notes';
import * as Styled from './styled';
import NoteEditorContainer from '../NoteEditor';

export interface RouteParams {
  noteId: NoteID;
}

export class NoteEditorRoute extends React.Component<RouteComponentProps<RouteParams>> {
  render() {
    const { match: { params: { noteId } } } = this.props;
    return (
      <Styled.Route>
        <NoteEditorContainer noteId={noteId} />
      </Styled.Route>
    );
  }
}

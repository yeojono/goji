import React from 'react';
import { Editor } from '@atlaskit/editor-core';
import * as Styled from './NoteEditor.styled';

export class NoteEditorPage extends React.Component {
  render() {
    return (
      <Styled.Page>
        <Editor appearance="full-page" />
      </Styled.Page>
    );
  }
}

export default NoteEditorPage;

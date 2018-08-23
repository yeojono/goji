import React from 'react';
import { Subscribe } from 'unstated';
import NotesStore from '../../../../app-state/notes/NotesStore';
interface Props {

}

export class NoteEditorContainer extends React.Component<Props> {
  render() {
    return (
      <Subscribe to={[NotesStore]}>
        
      </Subscribe>
    );
  }
}

export default NoteEditorContainer;

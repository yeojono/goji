import React from 'react';
import Button from '@atlaskit/button'
import { Editor, WithEditorActions, EditorContext } from '@atlaskit/editor-core';
import * as Styled from './NoteEditor.styled';
import EditorTitle from '../EditorTitle';
import { Subscribe } from 'unstated';
import NotesStore from '../../../app-state/notes/NotesStore';
import type { NoteID } from '../../../app-state/notes/types';

// type Props = {
//   noteId?: NoteID;
// }

export class NoteEditorPage extends React.Component {
  /**
   * Reference to the EditorTitle component
   * Used to get value of title for saving
   */
  editorTitleRef = null

  handleEditorTitleRef = ref => {
    this.editorTitleRef = ref;
  }

  /**
   * Inject ability to focus the Editor into the EditorTitle component
   */
  handleEditorTitleFocusNext = actions => () => {
    actions.focus();
  }

  /**
   * Save the title and note content
   */
  saveNote = actions => async () => {
    const title = this.editorTitleRef && this.editorTitleRef.value;
    const noteContent = await actions.getValue();
    const note = { title, noteContent };
    console.log(JSON.stringify(note))
  }

  render() {
    console.log(this.props);
    return (
      <Subscribe to={[NotesStore]}>
        {(notes) => {
          const note = notes.getNote(this.props.match.params.noteId) || {};
          return (
            <Styled.Page>
              <EditorContext>
                <WithEditorActions render={
                  (actions) => (
                    <>
                      <Button onClick={this.saveNote(actions)}>
                        Save
                      </Button>
                      <Editor
                        appearance="full-page"
                        contentComponents={
                          <EditorTitle
                            innerRef={this.handleEditorTitleRef}
                            shouldFocus
                            placeholder="What's on your mind?"
                            focusNext={this.handleEditorTitleFocusNext(actions)}
                            defaultValue={note.title}
                          />
                        }
                        defaultValue={note.noteContent}
                      />
                    </>
                  )
                }/>
              </EditorContext>
            </Styled.Page>
          )
        }}
      </Subscribe>
    );
  }
}

export default NoteEditorPage;

import React from 'react';
import Button from '@atlaskit/button'
import { Editor, WithEditorActions, EditorContext } from '@atlaskit/editor-core';

import EditorTitle from '../EditorTitle';

import { type Note } from '../../../../model/notes';

type Props = {
  note: Note;
  saveNote: (note: Note) => Promise<void>;
}

export class NoteEditor extends React.Component<Props> {
  static defaultProps = {
    saveNote: () => Promise.resolve(),
  }

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
    this.props.saveNote(note);
  }

  render() {
    return (
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
    );
  }
}

export default NoteEditor;

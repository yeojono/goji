import React from 'react';
import { Editor, EditorActions, WithEditorActions, EditorContext } from '@atlaskit/editor-core';

import { Note } from '../../../../model/notes';
import debounce from '../../../../util/debounce';

import EditorTitle from '../EditorTitle';

type Props = {
  actions: EditorActions;
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

  /**
   * Initialised in constructor
   */
  saveNote = null;
  cancelDebouncedSave = null;
  handleEditorChange = null;

  constructor(props) {
    super(props);

    /**
     * Save the title and note content
     */
    this.saveNote = async () => {
      const title = this.editorTitleRef && this.editorTitleRef.value;
      const noteContent = await this.props.actions.getValue();
      const note = { title, noteContent };

      this.props.saveNote(note);
    }

    const { cancel, debouncedFunc } = debounce(this.saveNote, 200);
    this.cancelDebouncedSave = cancel;
    this.handleEditorChange = debouncedFunc.bind(this);
  }

  componentWillUnmount() {
    this.cancelDebouncedSave();
    this.saveNote();
  }

  handleEditorTitleRef = ref => {
    this.editorTitleRef = ref;
  } 

  /**
   * Inject ability to focus the Editor into the EditorTitle component
   */
  handleEditorTitleFocusNext = () => {
    this.props.actions.focus();
  }

  render() {
    const { note } = this.props;
    return (
      <Editor
        appearance="full-page"

        allowCodeBlocks
        allowDate
        allowLists
        allowTables
        allowTasksAndDecisions
        allowTextColor

        contentComponents={
          <EditorTitle
            defaultValue={note.title}
            focusNext={this.handleEditorTitleFocusNext}
            innerRef={this.handleEditorTitleRef}
            placeholder="What's on your mind?"
            shouldFocus
          />
        }
        defaultValue={note.noteContent}
        onChange={this.handleEditorChange}
      />
    );
  }
}

const NoteEditorWithActions = (props) => (
  <EditorContext>
    <WithEditorActions
      render={
        (actions) => <NoteEditor {...props} actions={actions} />
      }
    />
  </EditorContext>
);

export default NoteEditorWithActions;

// @flow
import { Container } from "unstated";
import type { Note, NoteID, NotesState } from "./types";

export default class NotesStore extends Container<NotesState> {
  state: NotesState = {
    notes: {},
  }

  getNote = (noteId: NoteID): Note => this.state.notes[noteId];

  setNote = (noteId: NoteID, note: Note): Promise<void> =>
    this.setState(state => ({
      notes: {
        ...state.notes,
        [noteId]: note,
      }
    }));
}

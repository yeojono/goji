// @flow
import { Container } from "unstated";
import type { NotesState } from "./types";
import { type NoteID, type Note } from "../../model/notes";

export default class NotesStore extends Container<NotesState> {
  state: NotesState = {
    notes: {},
  }

  getNote = (noteId: NoteID): Note => this.state.notes[noteId];

  updateNote = (noteId: NoteID, note: Note): Promise<void> =>
    this.setState(state => ({
      notes: {
        ...state.notes,
        [noteId]: note,
      }
    }));
}

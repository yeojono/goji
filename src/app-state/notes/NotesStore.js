import type { NoteID, Note } from "../../model/notes";

import { Container } from "unstated";
import type { NotesState } from "./types";
import NotesPersistor from "../../persistence/localStorage/NotesPersistor";

export default class NotesStore extends Container<NotesState> {
  persistor: NotesPersistor;
  ready: boolean = false;

  state: NotesState = {
    notes: {},
  }

  constructor(persistor: NotesPersistor) {
    super();
    this.persistor = persistor;
    this.init();
  }

  init = async () => {
    const notes = await this.persistor.read();
    await this.setState(
      { notes },
      () => {
        this.ready = true
      },
    );
    return this;
  }

  getNote = (noteId: NoteID): Note => {
    return this.state.notes[noteId];
  }

  updateNote = async (noteId: NoteID, note: Note): Promise<void> => {
    await this.persistor.writeNote(noteId, note);
    this.setState(state => ({
      notes: {
        ...state.notes,
        [noteId]: note,
      }
    }));
  }

  writeNote = (noteId: NoteID, note: Note) => {
    this.persistor.writeNote(noteId, note);
  }
}

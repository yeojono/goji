// @flow
import type { Note, NoteID } from "../../model/notes";
import type { StoreKey } from "../types";

import LocalStoragePersistor from "./LocalStoragePersistor";

const NOTES_LS_KEY = 'NOTES';

export default class NotesPersistor extends LocalStoragePersistor {
  state = {}

  constructor() {
    super(NOTES_LS_KEY);
    window.addEventListener('beforeunload', this._saveBeforeUnload);
    this.read.bind(this);
  }

  _saveBeforeUnload = async () => {
    await this.write(this.state);
    window.removeEventListener('beforeunload', this._saveBeforeUnload);
  }

  /**
   * Read all notes from local storage
   */
  async read() {
    const notes = await super.read();
    this.state = {
      ...this.state,
      ...notes,
    }
    return Promise.resolve(notes);
  }

  /**
   * Write a note to state. State is persisted onbeforeunload
   */
  writeNote = async (noteId: NoteID, note: Note): Promise<void> => {
    this.state = {
      ...this.state,
      [noteId]: note,
    };
  }

}
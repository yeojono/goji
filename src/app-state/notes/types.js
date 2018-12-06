import { NoteID, type Note } from "../../model/notes";

export type NoteMap = {
  [id: NoteID]: Note;
}

export type NotesState = {
  notes: NoteMap;
}
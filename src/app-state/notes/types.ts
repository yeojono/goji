import { Note } from "../../model/notes";

export type NoteMap = {
  [id: string]: Note;
}

export type NotesState = {
  notes: NoteMap;
}
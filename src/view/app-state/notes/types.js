// @flow
export type NoteID = string;
export type NoteTitle = string;
export type NoteContent = Object;

export interface Note {
  title: NoteTitle;
  noteContent: NoteContent;
}

export type NoteMap = {
  [id: NoteID]: Note;
}

export type NotesState = {
  notes: NoteMap;
}
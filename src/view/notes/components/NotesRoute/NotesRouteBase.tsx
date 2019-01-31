import React from 'react';
import { Link } from 'react-router-dom';

import { Biscuit } from '../../../components/Biscuit/Biscuit';
import { Note } from '../../../../model/notes';

export interface Props {
  notes: { [id: string]: Note };
}

export class NotesRouteBase extends React.Component<Props> {
  render() {
    return (
      <>
        {Object.keys(this.props.notes).map(noteId => (
          <div key={noteId}>
            <Link to={`notes/${noteId}`}>
            <Biscuit
              title={this.props.notes[noteId].title}
            />
            </Link>
          </div>
        ))}
      </>
    );
  }
}

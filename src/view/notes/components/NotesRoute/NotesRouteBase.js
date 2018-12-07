import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'react-emotion';
import { Biscuit } from '../../../components/Biscuit/Biscuit';

interface Props {

}

const Route = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export class NotesRouteBase extends React.Component<Props> {
  render() {
    return (
      <ul>
        {Object.keys(this.props.notes).map(noteId => (
          <li key={noteId}>
            <Link to={`notes/${noteId}`}>
            <Biscuit
              title={this.props.notes[noteId].title}
            />
            </Link>
          </li>
        ))}
      </ul>
    );
  }
}

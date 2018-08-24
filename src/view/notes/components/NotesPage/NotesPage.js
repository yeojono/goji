import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'react-emotion';

interface Props {

}

const Page = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export class NotesPage extends React.Component<Props> {
  render() {
    return (
      <ul>
        {Object.keys(this.props.notes).map(noteId => (
          <li key={noteId}>
            <Link to={`notes/${noteId}`}>{this.props.notes[noteId].title}</Link>
          </li>
        ))}
      </ul>
    );
  }
}

export default NotesPage;

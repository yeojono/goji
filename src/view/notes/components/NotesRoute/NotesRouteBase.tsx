import React from "react";
import { Link } from "react-router-dom";
import { ipcRenderer } from 'electron';

import { Biscuit } from "../../../components/Biscuit/Biscuit";
import { Note } from "../../../../model/notes";
import * as Styled from "./styled";

export interface Props {
  notes: { [id: string]: Note };
}

export class NotesRouteBase extends React.Component<Props> {
  constructor(props) {
    super(props);
    ipcRenderer.on('message', (event, args) => {
      console.log(args);
    });
    console.log('aaghh');
  }

  checkForUpdates = () => {
    ipcRenderer.send('check-for-updates');
  }

  render() {
    return (
      <>
        <Styled.PageWrapper>
        <Styled.Title>Notes</Styled.Title>
          <Styled.BiscuitList>
            {Object.keys(this.props.notes).map(noteId => (
              <div key={noteId}>
                <Link to={`notes/${noteId}`}>
                  <Biscuit title={this.props.notes[noteId].title} />
                </Link>
              </div>
            ))}
            <button onClick={this.checkForUpdates}>Check for updates</button>
          </Styled.BiscuitList>
        </Styled.PageWrapper>
      </>
    );
  }
}

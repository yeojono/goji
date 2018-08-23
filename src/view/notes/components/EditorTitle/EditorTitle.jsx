import React from 'react';
import * as Styled from './EditorTitle.styled';

/**
 * Used in the note editor to create a large font title input
 */
export class EditorTitle extends React.Component {
  handleRef = titleInputRef => {
    const { innerRef, shouldFocus } = this.props
    if (shouldFocus && titleInputRef) {
      titleInputRef.focus();
    }
    if (innerRef && typeof innerRef === 'function') {
      innerRef(titleInputRef);
    }
  }

  handleKeyPress = (e) => {
    const { focusNext } = this.props;
    const { key } = e;
    if (['Enter', 'Tab'].includes(key)) {
      focusNext && focusNext();
    }
  }

  render() {
    return (
      <Styled.TitleInput
        innerRef={this.handleRef}
        placeholder={this.props.placeholder}
        onKeyPress={this.handleKeyPress}
        defaultValue={this.props.defaultValue}
      />
    );
  }
}

export default EditorTitle;

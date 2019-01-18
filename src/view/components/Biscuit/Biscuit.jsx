import React from 'react';
import * as Styled from './Biscuit.styled';

interface Props {
  title: string;
  content?: React.ReactNode;
  onClick?: (e: MouseEvent) => void;
  href?: string;
}

export class Biscuit extends React.Component<Props> {
  render() {
    const { title, content } = this.props;
    const wrappedContent = typeof content === 'string' ? (
        <Styled.TextContent>{content}</Styled.TextContent>
      ) : (
        content
      );
    return (
      <Styled.Crust>
        <Styled.Title>
          {title || <Styled.PlaceholderText>Untitled</Styled.PlaceholderText>}
        </Styled.Title>
        {wrappedContent}
      </Styled.Crust>
    );
  }
}

export default Biscuit;

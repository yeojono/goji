// @flow 
import React, { type Node } from 'react';
import * as Styled from './Biscuit.styled';

interface Props {
  title: string;
  content?: Node;
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
          {title}
        </Styled.Title>
        {wrappedContent}
      </Styled.Crust>
    );
  }
}

export default Biscuit;

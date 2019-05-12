import styled from 'react-emotion';
import { colors } from '@atlaskit/theme';

export const TitleInput = styled.input`
  border: none;
  outline: none;
  font-size: 2.07142857em;
  margin: 0 0 21px;
  padding: 0;
  width: 100%;

  &::placeholder {
    color: ${colors.N90};
  }
`;

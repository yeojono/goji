import styled from 'react-emotion';
import { typography } from '@atlaskit/theme';

export const Title = styled.div`
  ${typography.h600};
`

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;

  padding: 8px 32px 48px;
`;

export const BiscuitList = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 600px;

  > * {
    margin-top: 16px;
  }
`;
import styled from 'react-emotion';
import { colors, elevation, typography } from '@atlaskit/theme';

export const Crust = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  padding: 8px;

  ${elevation.e100}
  background-color: ${colors.N0}
  border-radius: 3px;
`;

export const Title = styled.span`
  ${typography.h200}
`;

export const TextContent = styled.span`
  color: ${colors.N500}
`;


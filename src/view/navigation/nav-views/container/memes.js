import React from 'react';
import styled from 'react-emotion';

import { CustomComponentTypes } from '../../custom-components';
import HomeFilledIcon from '@atlaskit/icon/glyph/home-filled';
import EditorNoteIcon from '@atlaskit/icon/glyph/editor/note';

const NAV_VIEW_CONTAINER_MEMES = 'NAV_VIEW_CONTAINER_MEMES';

const TitleMark = styled.h1`
  font-family: "Charlie Display";
  margin-right: 16px;
`;

const Wordmark = () => <TitleMark>Goji</TitleMark>;

export const memesView = {
  id: NAV_VIEW_CONTAINER_MEMES,
  type: 'container',
  getItems: () => [
  {
    type: 'HeaderSection',
    id: `${NAV_VIEW_CONTAINER_MEMES}:header`,
    items: [
      {
        type: 'Wordmark',
        wordmark: Wordmark,
        id: 'goji-wordmark',
      },
    ],
  },
  {
    type: 'MenuSection',
    id: `${NAV_VIEW_CONTAINER_MEMES}:menu`,
    items: [
      {
        type: CustomComponentTypes.MenuLink,
        id: 'home',
        before: HomeFilledIcon,
        text: 'Home',
        href: '/'
      },
      {
        type: CustomComponentTypes.MenuLink,
        id: 'notes',
        before: EditorNoteIcon,
        text: 'Notes',
        href: '/notes'
      },
    ],
  },
  ],
}
import EditorNoteIcon from '@atlaskit/icon/glyph/editor/note';
import AddIcon from '@atlaskit/icon/glyph/add';

import { CustomComponentTypes } from '../../custom-components';
import { GojiWordmark } from '../../../components/GojiWordmark';

const NAV_VIEW_CONTAINER_MEMES = 'NAV_VIEW_CONTAINER_MEMES';


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
        wordmark: GojiWordmark,
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
        id: 'notes',
        before: EditorNoteIcon,
        text: 'Notes',
        href: '/notes'
      },
      {
        type: CustomComponentTypes.MenuLink,
        id: 'new-note',
        before: AddIcon,
        text: 'New note',
        href: '/notes/new'
      },
    ],
  },
  ],
}
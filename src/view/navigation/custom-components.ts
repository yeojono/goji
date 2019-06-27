import { NavigationMenuLink as MenuLink } from '../components/NavigationMenuLink';

export enum CustomComponentTypes {
  MenuLink = 'MenuLink',
} 

export interface CustomComponents {
  [k in CustomComponentTypes]: React.ComponentType;
}

export const customComponents: CustomComponents = {
  MenuLink,
}
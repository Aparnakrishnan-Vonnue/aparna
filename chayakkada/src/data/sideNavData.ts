import {RootStackParamList} from '../types/navigation';

export type SideNavItems = {name: string; icon: string; navigateTo: any};
export type SideNavData = SideNavItems[];

export const sideNavData: SideNavData = [
  {
    name: 'Cutlery Stock',
    icon: 'cutlery',
    navigateTo: 'CUTLERY_STOCK',
  },
  {
    name: 'Ingredients Stock',
    icon: 'pagelines',
    navigateTo: 'INGREDIENTS_STOCK',
  },
  {
    name: 'Daily expense',
    icon: 'money',
    navigateTo: 'DAILY_EXPENSE',
  },
  {
    name: 'Stockouts',
    icon: 'shopping-cart',
    navigateTo: 'STOCKOUTS',
  },
];

type SideNavItems = {name: string; icon: string};
type SideNavData = SideNavItems[];

export const sideNavData: SideNavData = [
  {
    name: 'Cutlery Stock',
    icon: 'cutlery',
  },
  {
    name: 'Ingredients Stock',
    icon: 'pagelines',
  },
  {
    name: 'Daily expense',
    icon: 'money'
  },
  {
    name: 'Stockouts',
    icon: 'shopping-cart'
  }
];

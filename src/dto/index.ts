export interface ComponentProps {
  children?: JSX.Element | JSX.Element[] | React.ReactNode;
}

export enum NavPath {
  Search = 'search',
  Notification = 'notification',
  Products = 'products',
  Customers = 'customers',
  Orders = 'orders',
  Inventory = 'inventory',
  Promotions = 'promotions',
  GiftCards = 'giftcard',
  Pricing = 'pricing',
  Settings = 'settings',
}

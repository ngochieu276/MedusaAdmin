export interface ComponentProps {
  children?: JSX.Element | JSX.Element[] | React.ReactNode;
}

export enum APP_EVENTS {
  app_loading = 'app-loading',
  app_modal = 'app-modal',
  app_confirm_modal = 'app-confirm-modal',
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

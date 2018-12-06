export type StoreKey = string;

export interface Persistor {
  storeKey: StoreKey;
  +read: () => Promise<any>;
  write: (data: any) => Promise<void>;
}
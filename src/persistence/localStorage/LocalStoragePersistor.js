import { Persistor, StoreKey } from "../types";
import localStorage from './facade';

const GOJI_LS_KEY = 'GOJI_APP';

export default class LocalStoragePersistor implements Persistor {
  storeKey: StoreKey;

  constructor(storeKey: StoreKey) {
    this.storeKey = storeKey;
  }

  write = (data: any) => {
    localStorage.setItem(`${GOJI_LS_KEY}.${this.storeKey}`, JSON.stringify(data));
    return Promise.resolve();
  }

  async read(): any {
    return JSON.parse(
      localStorage.getItem(`${GOJI_LS_KEY}.${this.storeKey}`)
    );
  }
}

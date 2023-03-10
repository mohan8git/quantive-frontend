import type {SafeRefluxStore, SafeStoreDefinition} from 'cliff/utils/makeSafeRefluxStore';
import type {Store, StoreDefinition} from 'reflux';

type RemoveIndex<T> = {
  [P in keyof T as string extends P ? never : P]: T[P];
};

declare module 'reflux' {
  function createStore<T extends SafeStoreDefinition | StoreDefinition>(
    storeDefinition: T
  ): RemoveIndex<Store & T>;
}

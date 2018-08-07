import { Map } from 'immutable';
import { Reducer } from './reducer';
import { Store } from './store';
import { Action } from './action';

export namespace Fluent {
  export class State {
    private _state: Map<string, Store<{}>>;
    private _currentInd: number = -1;
    get state(): Map<string, Store<{}>> {
      return this._state;
    }
    public getStore<T>(name: string): Store<T> {
      this._state.forEach((store, storeName) => {
        if (name === storeName) {
          return store;
        }
      });
      throw 'requested non-existent store';
    }
    public setStore<T>(name: string, store: Store<T>): void {
      this._state = this._state.set(name, store);
    }
    public addStore<T>(name: string, initialState?: T[]): Store<T> {
      if (initialState != null) {
        const store = new Store<T>(initialState);
        this.setStore(name, store);
        return store;
      }
      return null;
    }
    public dispatch(type: string, payload?: any) {
      let newState = this.state;
      if (newState != null) {
        this.state.forEach((store, name) => {
          newState = newState.set(name, store.reduce({ type, payload }));
        });
      }
      if (newState != this.state) {
        this._state = newState;
      }
    }
  }
  export const createReducer = <T>(action: string, reduce: <T>(store: Store<T>, action: Action) => Store<T>): Reducer<T> => {
    return new Reducer(action, reduce);
  }
}


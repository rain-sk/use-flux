import { Map } from 'immutable';
import { Reducer } from './reducer';
import { Store } from './store';
import { Action } from './action';

import { createContext } from 'react';

export namespace Fluent {
  export class State {
    private _state: Map<string, Store<{}>>;
    private _provider: React.Provider<State>;
    private _consumer: React.Consumer<State>;
    get state(): Map<string, Store<{}>> {
      return this._state;
    }
    get Provider(): React.Provider<State> {
      return this._provider
    }
    get Consumer(): React.Consumer<State> {
      return this._consumer;
    }
    constructor() {
      const newContext = createContext(this);
      this._provider = newContext.Provider;
      this._consumer = newContext.Consumer
    }
    public getStore<T>(name: string): Store<T> {
      let result = null;
      this._state.forEach((store, storeName) => {
        if (name === storeName) {
          result = store;
        }
      });
      if (result != null) {
        return result;
      }
      throw 'non-existent store requested';
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


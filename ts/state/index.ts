import { Map } from 'immutable';

export namespace Fluent {
  export class State {
    private _history: Map<string, Store<{}>>[] = [Map()];
    private _currentInd: number = -1;
    get current(): Map<string, Store<{}>> {
      return this._history[this._currentInd];
    }
    public addStore<T>(name: string, initialState?: T[]): Store<T> {
      if (initialState != null) {
        const store = new Store<T>(initialState);
        this.current.set(name, store);
        return store;
      }
      return null;
    }
    public dispatch(type: string, payload?: any) {
      let current = this.current;
      if (current != null) {
        current.forEach(store => {
          store.reduce({ type, payload });
        });
      }
      if (current != this.current) {
        this._history.length = ++this._currentInd;
        this._history.push(current);
      }
    }
    public registerStore(name: string, store: Store<{}>): void {
      let current = this.current;
      current.set(name, store);
      if (current != this.current) {
        this._history.length = ++this._currentInd;
        this._history.push(current);
      }
    }
  }
  export interface Action {
    type: string;
    payload?: any;
  }
  export class Store<T> {
    public values: T[] = [];
    private reducers: Reducer[] = [];
    constructor(initialState?: T[]) {
      this.values = initialState != null ? initialState : [];
    }
    public registerReducers(reducers: Reducer[]) {
      reducers.forEach(reducer => this.registerReducer);
    }
    public registerReducer(reducer: Reducer) {
      this.reducers.push(reducer);
    }
    public reduce(action: Action) {
      this.reducers.forEach(reducer => {
        if (reducer.action == action.type) {
          reducer.reduce(this, action);
        }
      })
    }
  }
  export class Reducer {
    public action: string;
    private _reduce: (store: Store<{}>, action: Action) => Store<{}>;
    constructor(action: string, reduce: (store: Store<{}>, action: Action) => Store<{}>) {
      this.action = action;
      this._reduce = reduce;
    }
    public reduce(store: Store<{}>, action: Action): Store<{}> {
      if (this.action == action.type) {
        return this._reduce(store, action);
      }
      return store;
    }
  }
  export const createReducer = <T>(action: string, reduce: (store: Store<T>, action: Action) => Store<T>): Reducer => {
    return new Reducer(action, reduce);
  }
}


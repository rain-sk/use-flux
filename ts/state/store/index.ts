import { Reducer } from "../reducer";
import { Action } from "../action";
import { List } from "immutable";

export class Store<T> {
  public history = List<List<T>>();
  public store = List<T>();
  public interface: string;
  private reducers: Reducer<T>[] = [];
  constructor(initialState: T[]) {
    initialState.forEach(item => this.store.push(item));
    this.history = this.history.push(this.store);
  }
  public registerReducers(reducers: Reducer<T>[]) {
    reducers.forEach(reducer => this.registerReducer);
  }
  public registerReducer(reducer: Reducer<T>) {
    this.reducers.push(reducer);
  }
  public reduce(action: Action): Store<T> {
    let newStore: Store<T> = this;
    this.reducers.forEach(reducer => {
      if (reducer.action == action.type) {
        newStore = reducer.reduce<T>(newStore, action);
      }
    })
    return this;
  }
}
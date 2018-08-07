import { Store } from "../store";
import { Action } from "../action";

export class Reducer<T> {
  public action: string;
  private _reduce: <T>(store: Store<T>, action: Action) => Store<T>;
  constructor(action: string, reduce: <T>(store: Store<T>, action: Action) => Store<T>) {
    this.action = action;
    this._reduce = reduce;
  }
  public reduce<T>(store: Store<T>, action: Action): Store<T> {
    if (this.action == action.type) {
      return this._reduce<T>(store, action);
    }
    return store;
  }
}
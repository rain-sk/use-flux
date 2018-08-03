import { Map } from 'immutable';
export declare namespace Fluent {
    class State {
        private _history;
        private _currentInd;
        readonly current: Map<string, Store<{}>>;
        addStore<T>(name: string, initialState?: T[]): Store<T>;
        dispatch(type: string, payload?: any): void;
        registerStore(name: string, store: Store<{}>): void;
    }
    interface Action {
        type: string;
        payload?: any;
    }
    class Store<T> {
        values: T[];
        private reducers;
        constructor(initialState?: T[]);
        registerReducers(reducers: Reducer[]): void;
        registerReducer(reducer: Reducer): void;
        reduce(action: Action): void;
    }
    class Reducer {
        action: string;
        private _reduce;
        constructor(action: string, reduce: (store: Store<{}>, action: Action) => Store<{}>);
        reduce(store: Store<{}>, action: Action): Store<{}>;
    }
    const createReducer: <T>(action: string, reduce: (store: Store<T>, action: Action) => Store<T>) => Reducer;
}

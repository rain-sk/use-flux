"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const immutable_1 = require("immutable");
var Fluent;
(function (Fluent) {
    class State {
        constructor() {
            this._history = [immutable_1.Map()];
            this._currentInd = -1;
        }
        get current() {
            return this._history[this._currentInd];
        }
        addStore(name, initialState) {
            if (initialState != null) {
                const store = new Store(initialState);
                this.current.set(name, store);
                return store;
            }
            return null;
        }
        dispatch(type, payload) {
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
        registerStore(name, store) {
            let current = this.current;
            current.set(name, store);
            if (current != this.current) {
                this._history.length = ++this._currentInd;
                this._history.push(current);
            }
        }
    }
    Fluent.State = State;
    class Store {
        constructor(initialState) {
            this.values = [];
            this.reducers = [];
            this.values = initialState != null ? initialState : [];
        }
        registerReducers(reducers) {
            reducers.forEach(reducer => this.registerReducer);
        }
        registerReducer(reducer) {
            this.reducers.push(reducer);
        }
        reduce(action) {
            this.reducers.forEach(reducer => {
                if (reducer.action == action.type) {
                    reducer.reduce(this, action);
                }
            });
        }
    }
    Fluent.Store = Store;
    class Reducer {
        constructor(action, reduce) {
            this.action = action;
            this._reduce = reduce;
        }
        reduce(store, action) {
            if (this.action == action.type) {
                return this._reduce(store, action);
            }
            return store;
        }
    }
    Fluent.Reducer = Reducer;
    Fluent.createReducer = (action, reduce) => {
        return new Reducer(action, reduce);
    };
})(Fluent = exports.Fluent || (exports.Fluent = {}));
//# sourceMappingURL=index.js.map
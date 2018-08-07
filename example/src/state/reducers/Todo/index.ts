import { Fluent } from "flux-fluent";
import { Models } from '../../models';

export const TodoReducers = [
  Fluent.createReducer('ADD_TODO', (store: Fluent.Store<Models.Todo>, action: Fluent.Action): Fluent.Store<Models.Todo> => {
    // action.payload: string
    store.store = store.store.push(action.payload);
    return store;
  }),
  Fluent.createReducer('REMOVE_TODO', (store: Fluent.Store<Models.Todo>, action: Fluent.Action): Fluent.Store<Models.Todo> => {
    // action.payload: number
    store.store = store.store.splice(action.payload);
    return store;
  })
];
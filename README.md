# (Flux) Fluent
A simplified flux library for TS/JS apps.

NOTE
====
This is still under development. Check back for future details / instructions.

Flux and Redux libraries have too much boilerplate. Keep it simple.

`npm i flux-fluent`

```typescript
// import Fluent
import { Fluent } from 'flux-fluent';

// import a type interface
import { TodoModel } from './models/todo';

// instantiate a Fluent State
const state = new Fluent.State();

// create a store with initial values
let todoStore = state.addStore<TodoModel>(
  'todos',
  [
    {
      id: 0,
      text: 'eat a watermelon'
    }, {
      id: 1,
      text: 'make some friends'
    }
  ]);

// register your reducers
todoStore.registerReducers([
  Fluent.createReducer<TodoModel>(
    'ADD_TODO',
    (store: Fluent.Store<TodoModel>, action: Fluent.Action): Fluent.Store<TodoModel> => {
      store.values.push({
        id: store.values.length,
        text: action.payload
      });
      return store;
    }),
  Fluent.createReducer<TodoModel>(
    'DELETE_TODO',
    (store: Fluent.Store<TodoModel>, action: Fluent.Action): Fluent.Store<TodoModel> => {
      store.values.splice(action.payload);
      return store;
    }
  )]);

// dispatch an event to the state
state.dispatch({
  type: 'ADD_TODO',
  payload: 'Add a note to the todo store.'
});

// expose a singleton of the state's dispatch method
export let dispatch = state.dispatch;

```

## TODO
* Enable simple integration with React's Context API

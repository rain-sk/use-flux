# (Flux) Fluent
A simplified flux library for TS/JS apps.

`npm i flux-fluent`

```typescript
// import Fluent
import { Fluent } from 'flux-fluent';

// import a type interface
import { TodoModel } from './models/todo';

// instantiate a Fluent State
const state = new Fluent.State();

// create a store with initial values a new Store
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

export let dispatch = state.dispatch;

```

## TODO
* Enable simple integration with React's Context API
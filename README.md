# (Flux) Fluent
A React.Context factory for creating stateful, self-contained Contexts.

Flux and Redux libraries have too much boilerplate. Keep it simple.

`npm i flux-fluent`


Import:
```typescript
import * as Fluent from 'flux-fluent';
```

Prepare state:
```typescript
export interface IState extends Fluent.BaseState<IAction> {
  count: number;
  truthiness: boolean;
}

const initialState: IState = {
  count: 0,
  truthiness: false,
  dispatchStack: [] // required for Fluent states
};
```

Setup reducers:
```typescript
export type IAction = 'INCREMENT' | 'DECREMENT' | 'TOGGLE_TRUTHINESS';

// and bind Reducers to actions in a Map
export const reducers = new Map<IAction, Fluent.Reducer<IState>>();
reducers.set('INCREMENT', (state: IState): IState => ({
    ...state,
    count: state.count + 1
  }));
reducers.set('DECREMENT', (state: IState): IState => ({
    ...state,
    count: state.count - 1
  }));
reducers.set('TOGGLE_TRUTHINESS', (state: IState): IState => ({
    ...state,
    truthiness: !state.truthiness
  }));
```

Finally, create your context:
```typescript
export const [SomeContext, SomeProvider] = Fluent.Factory(initialState, reducers);
```

Use the `SomeProvider` at a position in the component hierarchy above where it will be consumed:
```typescript
export function AComponentWrapper(props) {
  return (
    <SomeProvider>
      {props.children}
      ...
    </SomeProvider>
  )
}
```

Consume with a function component:
```typescript
export function SomeNestedComponent(props) {
  const [context, dispatch] = React.useContext(SomeContext)
  return (
    <React.Fragment>
      <p>count: {context.count}</p>
      <button
        type="button"
        onClick={() => {dispatch({ type: 'INCREMENT' })}}>
        +
      </button>
    </React.Fragment>
  )
}
```

Consume with a class component:
```typescript
export class NestedComponentWrapper extends React.Component {
  render() {
    <SomeContext.Consumer>
      {context => (
        <p>{context.count}</p>
      )}
    </SomeContext.Consumer>
  }
}
```

This is a work in progress. As React's Hooks API matures there will likely be changes. Stay tuned!

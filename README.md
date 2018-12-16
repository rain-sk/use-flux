Flux and Redux libraries have too much boilerplate. Keep it Simple.

# useFlux

A utility for creating stateful flux stores exposed through the React Context API. Auto-complete for Action names if used with Typescript.


`npm i use-flux`


Import:
```typescript
import { BaseState, Reducer, useFlux } from 'use-flux';
```

Prepare state:
```typescript
export interface IState extends BaseState<IAction> {
  count: number;
}

const initialState: IState = {
  count: 0
};
```

Setup reducers:
```typescript
export type IAction = 'INCREMENT';

// and bind Reducers to actions in a Map
export const reducers = new Map<IAction, Reducer<IState>>();
reducers.set('INCREMENT', (state: IState): IState => ({
    ...state,
    count: state.count + 1
  }));
```

Finally, create your context:
```typescript
export const [CountContext, CountProvider] = useFlux(initialState, reducers);
```

Use the `SomeProvider` at a position in the component hierarchy above where it will be consumed:
```typescript
export function App(props) {
  return (
    <CountProvider>
      {props.children}
      ...
    </CountProvider>
  )
}
```

Consume with a function component:
```typescript
export function SomeNestedComponent(props) {
  const { state, dispatch } = React.useContext(SomeContext)
  return (
    <section>
      <p>count: {state.count}</p>
      <button
        type="button"
        onClick={() => {dispatch({ type: 'INCREMENT' })}}>
        +
      </button>
    </section>
  )
}
```

Consume with a class component:
```typescript
export class NestedComponentWrapper extends React.Component {
  render() {
    <SomeContext.Consumer>
      {({ state }) => (
        <p>{state.count}</p>
      )}
    </SomeContext.Consumer>
  }
}
```

This is a work in progress. As React's Hooks API matures there will be changes. Stay tuned!

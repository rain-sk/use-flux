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
export interface IState extends BaseState<Action> {
  count: number;
}

const initialState: IState = {
  count: 0
};
```

Setup reducers:
```typescript
// name your Actions
export type Action = 'INCREMENT' | 'DECREMENT';

// and bind Reducers to actions in a Map
export const reducers = new Map<Action, Reducer<IState>>();
reducers.set('INCREMENT', (state: IState): IState => ({
    ...state,
    count: state.count + 1
  }));
```

Finally, create your context:
```typescript
export const [CountContext, CountProvider] = useFlux(initialState, reducers);
```

Render `CountProvider` around components which consume it:
```typescript
export function AppContainer(props) {
  return (
    <CountProvider>
      {props.children}
      ...
    </CountProvider>
  )
}
```

Consume with a class component:
```typescript
export class CountComponent extends React.Component {
  render() {
    <SomeContext.Consumer>
      {({ state }) => (
        <p>{state.count}</p>
      )}
    </SomeContext.Consumer>
  }
}
```

Consume with a function component and the Hooks API:
```typescript
export const IncrementCount: React.FunctionComponent = (props) => {
  const { state, dispatch } = React.useContext(CountContext)
  return (
    <button
      type="button"
      onClick={() => {dispatch({ type: 'INCREMENT' })}}>
      +
    </button>
  )
}
```

This is a work in progress. As React's Hooks API matures there will be changes. Stay tuned!

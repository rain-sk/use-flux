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
export const [Context, Provider] = Fluent.Factory(initialState, reducers);
```

Use the `Provider` at a position in the component hierarchy above where it will be consumed:
```typescript
export function AComponentWrapper(props: any) {
  return (
    <Provider>
      {props.children}
      ...
    </Provider>
  )
}
```

This is a work in progress. As React's Hooks API matures there will likely be changes. Stay tuned!

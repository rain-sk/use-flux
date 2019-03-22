# useFlux

A utility for creating stateful flux stores exposed through the React Context API. Auto-complete for Action names if used with Typescript.

`npm i use-flux -s`

Example:
```tsx
import { Reducer, createFlux, useFlux } from 'use-flux';

// define actions
type Action = 'INCREMENT' | 'DECREMENT';


// associate actions with reducers
const reducers = new Map<Action,Reducer<number>>();

reducers.set('INCREMENT', (count: number) => count + 1);

reducers.set('DECREMENT', (count: number) => count - 1);


// generate CountContext and CountProvider
// CountContext: can be consumed by class and function components
// CountProvider: provides context, reduces actions
export const [CountContext, CountProvider] = createFlux(42, reducers);


...


export const App: React.FunctionComponent = () => {
  return (
    <CountProvider>
      <AppView />
    </CountProvider>
  )
}


...


export const AppView: React.FunctionComponent = () => {
  const count = useFlux(CountContext).state;

  return <p>Count: {count}</p>;
}
```

Check out [/example](https://github.com/spencerudnick/use-flux/tree/master/example) for more details!
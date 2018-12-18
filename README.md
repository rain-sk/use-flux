Flux and Redux libraries have too much boilerplate. Keep it Simple.

# useFlux

A utility for creating stateful flux stores exposed through the React Context API. Auto-complete for Action names if used with Typescript.

`npm i use-flux -s`

Example:
```typescript
import { Reducer, useFlux } from 'use-flux';

// define actions
type Action = 'INCREMENT' | 'DECREMENT';


// associate actions with reducers
const reducers = new Map<Action,Reducer<number>>();

reducers.set('INCREMENT', (count: number) => count + 1);

reducers.set('DECREMENT', (count: number) => count - 1);


// generate CountContext and CountProvider
// CountContext: can be consumed by class and function components
// CountProvider: provides context, reduces actions
export const [CountContext, CountProvider] = useFlux(42, reducers);
```

Check out [/examples](https://github.com/spencerudnick/use-flux/tree/master/examples) for more details!

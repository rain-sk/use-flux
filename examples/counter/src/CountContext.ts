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
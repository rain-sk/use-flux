import { createFlux, ActionMap } from 'use-flux';

// define actions
type CountAction = 'INCREMENT' | 'DECREMENT';

// associate actions with reducers
const reducers = new ActionMap<CountAction, number>();
reducers.set('INCREMENT', (count: number) => count + 1);
reducers.set('DECREMENT', (count: number) => count - 1);


// generate CountContext and CountProvider
// CountContext: can be consumed by class and function components
// CountProvider: provides context, reduces actions
export const [CountContext, CountProvider] = createFlux(42, reducers);

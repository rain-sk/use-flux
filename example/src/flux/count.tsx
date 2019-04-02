import { createFlux } from 'use-flux';

// define actions
type CountAction = 'INCREMENT' | 'DECREMENT';

// associate actions with reducers
// generate CountContext and CountProvider
// CountContext: can be consumed by class and function components
// CountProvider: provides context, reduces actions
export const [reducers, CountStore, CountProvider] = createFlux<CountAction, number>(42);

reducers.set('INCREMENT', (count: number) => ++count);
reducers.set('DECREMENT', (count: number) => --count);

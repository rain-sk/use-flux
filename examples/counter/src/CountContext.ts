import { Reducer, useFlux } from 'use-flux';

// define state
interface ICountState {
	count: number;
}

// name state mutations
type Action = 'INCREMENT' | 'DECREMENT';

// map mutator functions to their names
const reducers = new Map<Action,Reducer<ICountState>>();
reducers.set('INCREMENT', (state: ICountState) => ({
	count: state.count + 1
}));
reducers.set('DECREMENT', (state: ICountState) => ({
	count: state.count - 1
}));

const count = useFlux({
	count: 0
}, reducers);
// CountContext: can be consumed by class / function components
export const CountContext = count[0];
// CountProvider: provides context, handles state changes
export const CountProvider = count[1];

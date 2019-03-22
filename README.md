# useFlux

A utility for creating stateful flux stores exposed through the React Context API. Auto-complete for Action names if used with Typescript.

`npm i use-flux -s`

Example:
```tsx
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
```

In the root of your app:
```tsx
import * as React from 'react';

import { Count } from './count';
import { CountUp } from './count-up';
import { CountDown } from './count-down';
import { CountProvider } from './flux/count';

export const App: React.FunctionComponent = () => {
	return (
		<CountProvider>
			<Count />
			<CountUp />
			<CountDown />
		</CountProvider>
	);
}
```

Example consumer
```tsx
import * as React from 'react';
import { useFlux } from 'use-flux';
import { CountContext } from './flux/count';

export const Count: React.FunctionComponent = () => {
	const count = useFlux(CountContext).state;

	return (
		<p>count: {count}</p>
	);
}
```

Example dispatcher
```tsx
import * as React from 'react';
import { useFlux } from 'use-flux';
import { CountContext } from './flux/count';

export const CountUp: React.FunctionComponent = () => {
	const dispatch = useFlux(CountContext).dispatch;

	const callback = () => {
		dispatch({
			type: 'INCREMENT'
		});
	};

	return (
		<button type="button" onClick={callback}>+</button>
	);
}
```

Check out [/example](https://github.com/spencerudnick/use-flux/tree/master/example) for more details!
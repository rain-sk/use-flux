# use-flux

A library for exposing stores through React Context and managing state using the flux pattern. Leverages and supports React Hooks.

`npm i use-flux -s`

Example:
```tsx
import { createFlux } from 'use-flux';

type CountAction = 'INCREMENT' | 'DECREMENT';

export const [reducers, CountStore, CountProvider] = createFlux<CountAction, number>(42);

reducers.set('INCREMENT', (count: number) => ++count);
reducers.set('DECREMENT', (count: number) => --count);
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
import { CountStore } from './flux/count';

export const Count: React.FunctionComponent = () => {
	const count = useFlux(CountStore, store => store.state);

	return (
		<p>count: {count}</p>
	);
}
```

Example dispatcher
```tsx
import * as React from 'react';

import { useFlux } from 'use-flux';
import { CountStore } from './flux/count';

export const CountUp: React.FunctionComponent = () => {
	const increment = useFlux(CountStore, store => () => {
		store.dispatch({
			type: 'INCREMENT'
		});
	});

	return (
		<button type="button" onClick={increment}>+</button>
	);
}
```

Check out [/example](https://github.com/spencerudnick/use-flux/tree/master/example) for more a more complicated implementation!

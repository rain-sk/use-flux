import * as React from 'react';
import { useFlux } from 'use-flux';
import { CountStore } from './flux/count';

export const Count: React.FunctionComponent = () => {
	const count = useFlux(CountStore, store => store.state);

	return (
		<p>count: {count}</p>
	);
}
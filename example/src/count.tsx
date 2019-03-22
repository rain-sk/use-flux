import * as React from 'react';
import { useFlux } from 'use-flux';
import { CountContext } from './flux/count';

export const Count: React.FunctionComponent = () => {
	const count = useFlux(CountContext).state;

	return (
		<p>count: {count}</p>
	);
}
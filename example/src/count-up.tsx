import * as React from 'react';
import { useFlux } from 'use-flux';
import { CountStore } from './flux/count';

export const CountUp: React.FunctionComponent = () => {
	const dispatch = useFlux(CountStore, store => store.dispatch);

	const callback = () => {
		dispatch({
			type: 'INCREMENT'
		});
	};

	return (
		<button type="button" onClick={callback}>+</button>
	);
}
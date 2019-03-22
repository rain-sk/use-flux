import * as React from 'react';
import { useFlux } from 'use-flux';
import { CountContext } from './flux/count';

export const CountDown: React.FunctionComponent = () => {
	const dispatch = useFlux(CountContext).dispatch;

	const callback = () => {
		dispatch({
			type: 'DECREMENT'
		});
	};

	return (
		<button type="button" onClick={callback}>-</button>
	);
}
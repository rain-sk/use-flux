import * as React from 'react';

import { CountContext } from './CountContext';

export const CountDecrementor: React.FunctionComponent = () => {
	const { dispatch } = React.useContext(CountContext);
	function decrement() {
		dispatch({type: 'DECREMENT'});
	}
	return (
		<button type="button" onClick={decrement}>-</button>
	);
}
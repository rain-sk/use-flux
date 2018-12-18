import * as React from 'react';
import { CountContext } from '../contexts/CountContext';

export const CountIncrementor: React.FunctionComponent = () => {
	const { dispatch } = React.useContext(CountContext);
	function increment() {
		dispatch({type: 'INCREMENT'});
	}
	return (
		<button type="button" onClick={increment}>+</button>
	);
}
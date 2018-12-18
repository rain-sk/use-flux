import * as React from 'react';

import { CountContext } from './CountContext';

export const CountConsumer: React.FunctionComponent = () => {
	const { state } = React.useContext(CountContext);
	return (
		<p>
			Count: {state.count}
		</p>
	);
}
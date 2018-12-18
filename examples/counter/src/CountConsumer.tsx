import * as React from 'react';

import { CountContext } from './CountContext';

export const CountConsumer: React.FunctionComponent = () => {
	const count = React.useContext(CountContext);
	return (
		<p>
			Count: {count.state}
		</p>
	);
}
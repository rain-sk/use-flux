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
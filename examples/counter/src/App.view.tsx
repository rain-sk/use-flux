import * as React from 'react';

import { CountConsumer } from './CountConsumer';
import { CountDecrementor } from './CountDecrementor';
import { CountIncrementor } from './CountIncrementor';

export const AppView: React.FunctionComponent = () => {
	return (
		<div className="App">
          <CountConsumer />
          <CountIncrementor />
          <CountDecrementor />
        </div>
	);
}
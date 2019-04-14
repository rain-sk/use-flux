import * as React from 'react';

import { TodoProvider } from './flux/todo';
import { Todos } from './todos';

export const App: React.FunctionComponent = () => (
	<TodoProvider>
		<Todos />
	</TodoProvider>
);

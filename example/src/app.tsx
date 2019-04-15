import * as React from 'react';

import { TodoProvider } from './flux/todo';
import { Todos } from './todos';
import { UndoRedo } from './undo-redo';

export const App: React.FunctionComponent = () => (
	<TodoProvider>
		<h1>Todo List</h1>
		<Todos />
		<UndoRedo />
	</TodoProvider>
);

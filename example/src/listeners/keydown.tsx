import * as React from 'react';
import { useFlux } from 'use-flux';
import { TodoStore } from 'src/flux/todo';
import { undo, redo } from 'src/flux/todo.actions';

export const KeydownListener: React.FunctionComponent = () => {
	const actions = useFlux(TodoStore, ({ dispatch }) => ({
		undo: () => { dispatch(undo()); },
		redo: () => { dispatch(redo()); }
	}));

	React.useEffect(() => {
		document.addEventListener('keydown', (e: KeyboardEvent) => {
			if ((document.activeElement as Element).tagName.toLowerCase() !== 'input')
				switch (e.keyCode || e.which) {
					case 90:
						actions.undo();
						break;
					case 88:
						actions.redo();
						break;
				}
		});
	}, [false]);

	return null;
};
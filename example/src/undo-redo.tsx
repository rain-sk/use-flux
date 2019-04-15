import * as React from 'react';
import { useFlux } from 'use-flux';
import { TodoStore } from './flux/todo';
import { undo, redo } from './flux/todo.actions';
import { Redo } from './icons/redo';
import { Undo } from './icons/undo';

export const UndoRedo: React.FunctionComponent = () => {
	const actions = useFlux(TodoStore, store => ({
		undo: store.state.stateStackIndex > 0 ? () => { store.dispatch(undo()); } : undefined,
		redo: store.state.stateStackIndex < store.state.stateStack.length - 1 ? () => { store.dispatch(redo()); } : undefined
	}));

	return (
		<nav className="undo-redo">
			<button className="icon-undo" type="button" disabled={!actions.undo} onClick={actions.undo}><Undo /></button>
			<button className="icon-undo" type="button" disabled={!actions.redo} onClick={actions.redo}><Redo /></button>
		</nav>
	)
}
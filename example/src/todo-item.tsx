import * as React from 'react';
import { ITodoItem, TodoStore } from './flux/todo';
import { useFlux } from 'use-flux';
import { checkTodo, uncheckTodo, deleteTodo } from './flux/todo.reducers';

export const TodoItem: React.FunctionComponent<ITodoItem> = props => {
	const actions = useFlux(TodoStore, store => ({
		onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
			store.dispatch(e.target.checked ? checkTodo(props.id) : uncheckTodo(props.id));
		},
		delete: () => {
			store.dispatch(deleteTodo(props.id));
		}
	}));

	return (
		<li>
			<input type="checkbox" checked={props.checked} onChange={actions.onChange} />
			<p>{props.value}</p>
			<button type="button" onClick={actions.delete}>delete</button>
		</li>
	);
};
import * as React from 'react';
import { useFlux } from 'use-flux';
import { TodoStore } from './flux/todo';
import { createTodo } from './flux/todo.actions';

export const NewTodo: React.FunctionComponent = () => {
	const [newTodoValue, setNewTodoValue] = React.useState('');
	const newTodoValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setNewTodoValue(e.target.value);
	}

	const create = useFlux(TodoStore, (store) => (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		store.dispatch(createTodo(newTodoValue));
		setNewTodoValue('');
	});

	return (
		<form onSubmit={create}>
			<input type="text" value={newTodoValue} onChange={newTodoValueChange} />
			<button>create</button>
		</form>
	);
}
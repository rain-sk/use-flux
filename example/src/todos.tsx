import * as React from 'react';
import { useFlux } from 'use-flux';
import { TodoStore } from './flux/todo';
import { TodoItem } from './todo-item';
import { createTodo } from './flux/todo.reducers';

export const Todos: React.FunctionComponent = () => {

	const [newTodoValue, setNewTodoValue] = React.useState('');
	const newTodoValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setNewTodoValue(e.target.value);
	}

	const todos = useFlux(TodoStore, (store) => ({
		incomplete: store.state.todos.filter(todo => todo.checked === false),
		complete: store.state.todos.filter(todo => todo.checked),
		create: (e: React.FormEvent<HTMLFormElement>) => {
			e.preventDefault();
			store.dispatch(createTodo(newTodoValue));
			setNewTodoValue('');
		}
	}));

	return (
		<>
			<form onSubmit={todos.create}>
				<input type="text" value={newTodoValue} onChange={newTodoValueChange} />
				<button>create</button>
			</form>
			<ul>
				<h2>Incomplete ({todos.incomplete.length})</h2>
				{todos.incomplete.map((todo, index) => (
					<TodoItem key={index} {...todo} />
				))}
			</ul>
			<ul>
				<h2>Complete ({todos.complete.length})</h2>
				{todos.complete.map((todo, index) => (
					<TodoItem key={index} {...todo} />
				))}
			</ul>
		</>
	)
}
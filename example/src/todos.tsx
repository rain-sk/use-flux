import * as React from 'react';
import { useFlux } from 'use-flux';
import { TodoStore } from './flux/todo';
import { TodoItem } from './todo-item';
import { NewTodo } from './new-todo';

export const Todos: React.FunctionComponent = () => {

	const todos = useFlux(TodoStore, (store) => ({
		incomplete: store.state.todos.filter(todo => todo.checked === false),
		complete: store.state.todos.filter(todo => todo.checked)
	}));

	return (
		<section className="todos">
			<NewTodo />
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
		</section>
	)
}
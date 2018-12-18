import * as React from 'react';

import { ITodo } from './interfaces/ITodo';
import { TodoAction, TodoContext } from './TodoContext';
import { ITodoListItemProps, TodoListItem } from './TodoListItem';

type Dispatch = (value: {
	type: TodoAction;
	payload?: any;
}) => void;

const mapListItemProps = (todos: ITodo[], dispatch: Dispatch): ITodoListItemProps[] => {

	const toggleCallback = (complete: boolean, index: number) => {
		return () => {
			dispatch({
				payload: index,
				type: complete
					? 'RESET'
					: 'COMPLETE'
			});
		}
	}

	const deleteCallback = (index: number) => {
		return () => {
			dispatch({
				payload: index,
				type: 'DELETE'
			});
		}
	}

	// map todo item props
	return todos.map((todo, index) => ({
		deleteCallback: deleteCallback(index),
		todo,
		toggleCallback: toggleCallback(todo.complete, index)
	}));
}

export const TodoList: React.FunctionComponent = () => {
	const { state, dispatch } = React.useContext(TodoContext);

	const listItemProps = mapListItemProps(state.todos, dispatch)
	return (
		<main>
			<section className="todos-incomplete">
				<h2>
					Incomplete
				</h2>
				<ul>
					{listItemProps.filter(props => !props.todo.complete).map((props, index) => (
						<TodoListItem key={index} {...props} />
					))}
				</ul>
			</section>
			<section className="todos-complete">
				<h2>
					Complete
				</h2>
				<ul>
					{listItemProps.filter(props => props.todo.complete).map((props, index) => (
						<TodoListItem key={index} {...props} />
					))}
				</ul>
			</section>
		</main>
	);

}
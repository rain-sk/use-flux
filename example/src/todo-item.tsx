import * as React from 'react';
import { ITodoItem, TodoStore } from './flux/todo';
import { useFlux } from 'use-flux';
import { checkTodo, uncheckTodo, deleteTodo } from './flux/todo.actions';
import { Pencil } from './icons/pencil';
import { Cross } from './icons/cross';
import { TodoEdit } from './todo-edit';

export const TodoItem: React.FunctionComponent<ITodoItem> = props => {
	const actions = useFlux(TodoStore, store => ({
		onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
			store.dispatch(e.target.checked ? checkTodo(props.id) : uncheckTodo(props.id));
		},
		delete: () => {
			store.dispatch(deleteTodo(props.id));
		}
	}));

	const [editing, setEditing] = React.useState(false);
	const edit = () => {
		setEditing(true);
	}
	const stopEditing = () => {
		setEditing(false);
	}

	return (
		<li data-checked={props.checked}>
			{!editing
				? (
					<>
						<button className="icon-pencil" type="button" onClick={edit}><Pencil width={15} height={15} /></button>
						<input id={props.id.toString()} type="checkbox" checked={props.checked} onChange={actions.onChange} />
						<label htmlFor={props.id.toString()}>{props.value}</label>
					</>
				) : (
					<TodoEdit id={props.id} value={props.value} stopEditingCallback={stopEditing} />
				)}
			<button className="icon-cross" type="button" onClick={actions.delete}><Cross width={15} height={15} /></button>
		</li>  
	);
};
import * as React from 'react';

import { ITodo } from './TodoContext';

export interface ITodoListItemProps {
	deleteCallback: () => void;
	todo: ITodo;
	toggleCallback: () => void;
}

export const TodoListItem: React.FunctionComponent<ITodoListItemProps> = (props) => {
	return (
		<li className={`${props.todo.complete ? 'complete' : ''}`}>
			<label>
				<input type="checkbox" onChange={props.toggleCallback} checked={props.todo.complete} />
				{props.todo.text}
			</label>
			<button type="button" onClick={props.deleteCallback} aria-label={`delete '${props.todo.text}'`}>X</button>
		</li>
	);
}
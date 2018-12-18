import * as React from 'react';

import { TodoContext } from './TodoContext';

export const TodoInput: React.FunctionComponent = () => {
	const { dispatch } = React.useContext(TodoContext);

	const [input, setInput] = React.useState('');

	const addTodo = () => {
		if (input.trim().length > 0) {
			const payload = input;
			dispatch({
				payload,
				type: 'ADD'
			});
			setInput('');
		}
	}

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInput(e.target.value);
	}

	const handleEnterKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.keyCode === 13) {
			e.preventDefault();
			addTodo();
		}
	}

	return (
		<fieldset>
			<legend>
				New todo:
			</legend>
			<label>
				<span>Todo:</span>
				<input type="text" onChange={handleInputChange} onKeyDown={handleEnterKey} value={input} />
			</label>
			<button type="button" onClick={addTodo}>Add</button>
		</fieldset>
	);
}
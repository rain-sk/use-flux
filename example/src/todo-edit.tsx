import * as React from 'react';
import { useFlux } from 'use-flux';
import { TodoStore } from './flux/todo';
import { editTodo } from './flux/todo.actions';

interface ITodoEditProps {
	id: number;
	value: string;
	stopEditingCallback: () => void;
}

const inputRef = React.createRef<HTMLInputElement>();

export const TodoEdit: React.FunctionComponent<ITodoEditProps> = props => {
	const [itemValue, setItemValue] = React.useState(props.value);
	const onItemValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setItemValue(e.target.value);
	}

	const saveChanges = useFlux(TodoStore, store => (newValue: string) => {
		store.dispatch(editTodo(props.id, newValue));
	});
	let onFormSubmit = React.useCallback((e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		saveChanges(itemValue);
		props.stopEditingCallback();
	}, [itemValue]);

	const input = React.useRef<HTMLInputElement>(inputRef.current);
	React.useEffect(() => {
		setTimeout(() => {
			if (input.current) {
				input.current.focus();
				const onBlur = () => {
					props.stopEditingCallback();
					input.current && input.current.removeEventListener('blur', onBlur);
				};
				input.current.addEventListener('blur', onBlur);
			}
		})
	});

	return (
		<form onSubmit={onFormSubmit}>
			<input type="text" value={itemValue} onChange={onItemValueChange} ref={input} />
			<button hidden={true} />
		</form>
	);
};
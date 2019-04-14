import { Action } from 'use-flux';

import { TodoAction } from './todo';

export const createTodo = (value: string): Action<TodoAction> => ({
	type: 'CREATE',
	payload: {
		value
	}
});

export const deleteTodo = (id: number): Action<TodoAction> => ({
	type: 'DELETE',
	payload: {
		id
	}
});

export const checkTodo = (id: number): Action<TodoAction> => ({
	type: 'CHECK',
	payload: {
		id
	}
});

export const uncheckTodo = (id: number): Action<TodoAction> => ({
	type: 'UNCHECK',
	payload: {
		id
	}
});

export const editTodo = (id: number, newValue: string): Action<TodoAction> => ({
	type: 'EDIT',
	payload: {
		id,
		newValue
	}
});

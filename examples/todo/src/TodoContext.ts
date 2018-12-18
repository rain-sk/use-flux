import { Reducer, useFlux } from 'use-flux';

import { ITodo } from './interfaces/ITodo';

export interface ITodoState {
	todos: ITodo[];
}

// define actions
export type TodoAction = 'ADD' | 'COMPLETE' | 'RESET' | 'DELETE';

// associate actions with reducers
const reducers = new Map<TodoAction,Reducer<ITodoState>>();

reducers.set('ADD', (state: ITodoState, payload: string) => ({
	todos: [{ text: payload, complete: false }, ...state.todos]
}));

reducers.set('COMPLETE', (state: ITodoState, payload: number) => {
	const todos = state.todos;
	todos[payload].complete = true;
	return { todos }
});

reducers.set('RESET', (state: ITodoState, payload: number) => {
	const todos = state.todos;
	todos[payload].complete = false;
	return { todos }
});

reducers.set('DELETE', (state: ITodoState, payload: number) => {
	const todos = state.todos;
	todos.splice(payload, 1);
	return { todos };
});


// generate TodoContext and TodoProvider
// TodoContext: can be consumed by class and function components
// TodoProvider: provides context, reduces actions
export const [TodoContext, TodoProvider] = useFlux({ todos: [] }, reducers);
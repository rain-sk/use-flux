import { createFlux } from 'use-flux';

let _uuid = 0;

// define actions
export type TodoAction = 'CREATE' | 'CHECK' | 'UNCHECK' | 'DELETE' | 'EDIT';

export interface ITodoItem {
	id: number;
	value: string;
	checked: boolean;
}

export interface ITodoState {
	todos: ITodoItem[];
}

// associate actions with reducers
// generate CountContext and CountProvider
// CountContext: can be consumed by class and function components
// CountProvider: provides context, reduces actions
export const [reducers, TodoStore, TodoProvider] = createFlux<TodoAction, ITodoState>({
	todos: []
});

reducers.set('CREATE', (state, payload: { value: string }) => ({
	todos: [...state.todos, {
		id: _uuid++,
		value: payload.value,
		checked: false
	}]
}));

reducers.set('DELETE', (state, payload: { id: number }) => ({
	todos: state.todos.filter(todo => todo.id !== payload.id)
}));

reducers.set('CHECK', (state, payload: { id: number }) => {
	const todo = state.todos.filter(todo => todo.id === payload.id)[0];
	todo.checked = true;
	return {
		todos: [...state.todos]
	}
});

reducers.set('UNCHECK', (state, payload: { id: number }) => {
	const todo = state.todos.filter(todo => todo.id === payload.id)[0];
	todo.checked = false;
	return {
		todos: [...state.todos]
	}
});

reducers.set('EDIT', (state, payload: { id: number, newValue: string }) => {
	const todo = state.todos.filter(todo => todo.id === payload.id)[0];
	todo.value = payload.newValue;
	return {
		todos: [...state.todos]
	}
});

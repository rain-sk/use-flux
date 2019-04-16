import { createFlux, BaseState } from 'use-flux';
import { CREATE, DELETE, CHECK, UNCHECK, EDIT, UNDO, REDO, CACHE } from './todo.reducers';


// define actions
export type TodoAction = 'CREATE' | 'CHECK' | 'UNCHECK' | 'DELETE' | 'EDIT' | 'UNDO' | 'REDO' | 'CACHE';

export interface ITodoItem {
	id: number;
	value: string;
	checked: boolean;
}

export interface ITodoState extends BaseState<TodoAction> {
	todos: ITodoItem[];
	stateStack: ITodoItem[][];
	stateStackIndex: number;
}

export const [reducers, TodoStore, TodoProvider] = createFlux<TodoAction, ITodoState>({
	todos: [],
	stateStack: [[]],
	stateStackIndex: 0
});

reducers.set('CREATE', CREATE);

reducers.set('DELETE', DELETE);

reducers.set('CHECK', CHECK);

reducers.set('UNCHECK', UNCHECK);

reducers.set('EDIT', EDIT);

reducers.set('UNDO', UNDO);

reducers.set('REDO', REDO);

reducers.set('CACHE', CACHE);

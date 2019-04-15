import { createFlux, BaseState } from 'use-flux';
import { createTodo, deleteTodo, checkTodo, uncheckTodo, editTodo, undo, redo, cache } from './todo.reducers';


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

reducers.set('CREATE', createTodo);

reducers.set('DELETE', deleteTodo);

reducers.set('CHECK', checkTodo);

reducers.set('UNCHECK', uncheckTodo);

reducers.set('EDIT', editTodo);

reducers.set('UNDO', undo);

reducers.set('REDO', redo);

reducers.set('CACHE', cache);

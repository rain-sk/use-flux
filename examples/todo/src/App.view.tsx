import * as React from 'react';

import { TodoInput } from './TodoInput';
import { TodoList } from './TodoList';

export const AppView: React.FunctionComponent = () => {
    return (
        <main className="App">
            <header>
                <h1>todos</h1>
                <small>with useFlex</small>
            </header>
            <TodoInput />
            <TodoList />
        </main>
    );
}
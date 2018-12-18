import * as React from 'react';

import { AppView } from './App.view';
import { TodoProvider } from './TodoContext';

class App extends React.Component {
    public render() {
        return (
            <TodoProvider>
                <AppView />
            </TodoProvider>
        );
    }
}

export default App;

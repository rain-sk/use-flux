import * as React from 'react';

import { AppView } from './App.view';
import { CountProvider } from './CountContext';

class App extends React.Component {
    public render() {
        return (
            <CountProvider>
                <AppView />
            </CountProvider>
        );
    }
}

export default App;

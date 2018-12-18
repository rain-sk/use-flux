import * as React from 'react';
import './App.css';

import { AppView } from './components/App.view';
import { CountProvider } from './contexts/CountContext';

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

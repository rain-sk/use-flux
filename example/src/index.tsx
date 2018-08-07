import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import { Fluent } from 'flux-fluent';
import { Models, Reducers } from './state';

const state = new Fluent.createState();
const todoStore = state.addStore<Models.Todo>('todos');
todoStore.registerReducers(Reducers.Todo);

export const { Provider, Consumer } = React.createContext(state);

ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import { Fluent } from 'flux-fluent';

const state = new Fluent.State();

ReactDOM.render(
  <state.Provider>
    <App />
  </state.Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();

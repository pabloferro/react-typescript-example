import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import './layout.scss';
import './margins.scss';
import './App.scss';

import usePersistentReducer from './hooks/usePersistentReducer';
import OrdersScreen from './components/OrdersScreen';
import OrderDetailScreen from './components/OrderDetailScreen';
import { reducer, DEFAULT_STATE } from './reducer';

function App() {
  const [state, dispatch] = usePersistentReducer(reducer, DEFAULT_STATE);

  return (
    <Router>
      <div className="App">
        <header className="App-bar">
          <p>TypeScript Example</p>
        </header>
        <div className="App-main">
          <div className="App-screen">
            <Switch>
              <Route path="/orders/:name">
                <OrderDetailScreen state={state} dispatch={dispatch} />
              </Route>
              <Route path="/">
                <OrdersScreen state={state} dispatch={dispatch} />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;

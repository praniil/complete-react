import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import Store from './store'
import Tasks from './Tasks';
function App() {
  return (
    <Provider store={Store}>
      <div>
        <Tasks/>
      </div>
    </Provider>
  );
}

export default App;

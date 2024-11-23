import React from 'react';
import { Provider } from 'react-redux';
import Apps from './Components/Apps';
import { store } from './Components/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Apps />
      </div>
    </Provider>
  );
}

export default App;


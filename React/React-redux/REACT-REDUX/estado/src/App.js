import './App.css';
import Counter from './components/Counter';
import Header from './components/Header';

import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import counterReducer from './reducers/counterReducer';

function App() {

  const allReducers = combineReducers({ counter: counterReducer })
  const store = createStore(allReducers);

  return (
    <div className="App">
      <Provider store={store}>
        <Header></Header>
        <Counter></Counter>
      </Provider>
    </div>
  );
}

export default App;

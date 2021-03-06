import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';
import elysiaClient from './utils/elysiaClient';
import { Provider } from 'react-redux';
import store from './store';
import OutermostContainer from './components/OutermostContainer/OutermostContainer';
import './App.css';

axios.defaults.baseURL = 'http://localhost:5000/api/v1';
axios.defaults.baseURL = 'https://agile-badlands-15160.herokuapp.com/api/v1';

elysiaClient.configure({
  HTTPService: axios,
});

function App() {
  return (
    // Wrap your app into the react-redux Provider component.
    // That will make the store available globally in the app.
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <OutermostContainer />
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;

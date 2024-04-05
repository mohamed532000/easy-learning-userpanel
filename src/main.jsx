import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { myStore } from './project-actions/Store.js';
import pStore from './project-actions/Store.js';
import { PersistGate } from 'redux-persist/lib/integration/react';
import {Provider} from "react-redux"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={myStore}>
        <PersistGate loading={null} persistor={pStore}>
          <App />
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
)

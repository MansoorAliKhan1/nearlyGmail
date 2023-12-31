import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import './index.css';
// import { selectexpanded } from './features/counter/mailSlice';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <Provider store={store} >
      <App />
    </Provider>
);


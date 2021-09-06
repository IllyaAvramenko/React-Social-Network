import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/store';

const rerenderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={store.getState()}
           dispatch={store.dispatch.bind(store)}
           store={store} />
    </React.StrictMode>,
    document.getElementById('root')
  );
};

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);
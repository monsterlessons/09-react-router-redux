import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { Router, Route, hashHistory } from 'react-router';

import App from './App';
import './index.css';
import reducer from './reducers';
import About from './About';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}/>
      <Router path="/about" component={About}/>
    </Router>
  </Provider>,
  document.getElementById('root')
);

// import { createStore } from 'redux';
//
// function playlist(state = [], action) {
//   if (action.type === 'ADD_TRACK') {
//     return [
//       ...state,
//       action.payload
//     ];
//   }
//   return state;
// }
//
// const store = createStore(playlist);
//
// const addTrackBtn = document.querySelectorAll('.addTrack')[0];
// const trackInput = document.querySelectorAll('.trackInput')[0];
// const list = document.querySelectorAll('.list')[0];
//
// store.subscribe(() => {
//   list.innerHTML = '';
//   trackInput.value = '';
//   store.getState().forEach(track => {
//     const li = document.createElement('li');
//     li.textContent = track;
//     list.appendChild(li);
//   });
// })
//
//
// addTrackBtn.addEventListener('click', () => {
//   const trackName = trackInput.value;
//   store.dispatch({ type: 'ADD_TRACK', payload: trackName });
// });

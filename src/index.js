import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { Router, Route, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import App from './App';
import './index.css';
import reducer from './reducers';
import About from './About';
import Track from './Track';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
const history = syncHistoryWithStore(hashHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}/>
      <Route path="/about" component={About}/>
      <Route path="/tracks/:id" component={Track}/>
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

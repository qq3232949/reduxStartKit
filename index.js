import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './containers/App'
import configureStore from './store/configureStore'
import 'todomvc-app-css/index.css'

const store = configureStore()
console.log(store.getState());
let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
);
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

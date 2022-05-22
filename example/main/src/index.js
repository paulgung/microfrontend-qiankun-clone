import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

import { registerMicroApps, start } from '../../../dist';


registerMicroApps([
  {
    name: 'vue1', // app name registered
    entry: '//localhost:8080',
    container: '#micro-container',
    activeRule: '/vue1',
  },
  {
    name: 'vue2',
    entry: '//localhost:8081',
    container: '#micro-container',
    activeRule: '/vue2',
  },
]);

start();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)



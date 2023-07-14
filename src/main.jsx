import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

// Redux
import { Provider } from 'react-redux'
import store from './app/store.js'

import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
     <BrowserRouter>
      <App />
     </BrowserRouter>
    </Provider>
)

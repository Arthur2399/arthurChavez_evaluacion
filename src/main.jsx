import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { App } from './App'
import { store } from './store'
import './GlobalStyles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App /> {/* application entry point */}
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
)

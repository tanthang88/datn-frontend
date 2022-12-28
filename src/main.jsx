import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './App.scss'
import RouterContainer from './router/root'
import { persistor, store } from './store/store.js'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <RouterContainer />
    </PersistGate>
  </Provider>,
)

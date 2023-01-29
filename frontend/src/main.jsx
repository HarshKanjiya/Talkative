import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import "./fonts/Groupe/groupemedium-8mxgn.otf"
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
import store from "./redux/reducer"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store} >
      <BrowserRouter basename='/' >
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)

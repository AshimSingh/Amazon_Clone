import React from 'react'
import App from "./App"
import ReactDOM from 'react-dom'
import "./index.css"
import { Provider } from 'react-redux'
import store from './components/store/store'
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>
)